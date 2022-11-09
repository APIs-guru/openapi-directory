import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams;
}


export class GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: shared.GenericResponse;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
