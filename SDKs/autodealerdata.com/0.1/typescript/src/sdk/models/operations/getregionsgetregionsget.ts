import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRegionsGetRegionsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;
}


export class GetRegionsGetRegionsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRegionsGetRegionsGetQueryParams;
}


export class GetRegionsGetRegionsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  regionResp?: shared.RegionResp;

  @Metadata()
  statusCode: number;
}
