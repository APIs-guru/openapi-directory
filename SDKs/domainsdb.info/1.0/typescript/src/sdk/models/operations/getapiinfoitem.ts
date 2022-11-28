import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiInfoItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetApiInfoItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiInfoItemQueryParams;
}


export class GetApiInfoItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKeyInfo?: shared.ApiKeyInfo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
