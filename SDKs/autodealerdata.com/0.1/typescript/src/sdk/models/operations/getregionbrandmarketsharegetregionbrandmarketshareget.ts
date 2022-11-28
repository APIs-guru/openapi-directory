import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams;
}


export class GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  genericResponse?: shared.GenericResponse;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
