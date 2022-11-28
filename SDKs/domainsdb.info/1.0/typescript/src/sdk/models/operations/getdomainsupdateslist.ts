import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomainsUpdatesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetDomainsUpdatesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDomainsUpdatesListQueryParams;
}


export class GetDomainsUpdatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateModel?: shared.UpdateModel;
}
