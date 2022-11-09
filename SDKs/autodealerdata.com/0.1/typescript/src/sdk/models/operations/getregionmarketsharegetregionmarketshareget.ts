import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRegionMarketShareGetRegionMarketShareGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetRegionMarketShareGetRegionMarketShareGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRegionMarketShareGetRegionMarketShareGetQueryParams;
}


export class GetRegionMarketShareGetRegionMarketShareGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: shared.GenericResponse;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
