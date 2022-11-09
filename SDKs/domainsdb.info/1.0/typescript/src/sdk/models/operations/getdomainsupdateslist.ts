import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainsUpdatesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;
}


export class GetDomainsUpdatesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDomainsUpdatesListQueryParams;
}


export class GetDomainsUpdatesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateModel?: shared.UpdateModel;
}
