import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiInfoItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetApiInfoItemRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiInfoItemQueryParams;
}


export class GetApiInfoItemResponse extends SpeakeasyBase {
  @Metadata()
  apiKeyInfo?: shared.ApiKeyInfo;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
