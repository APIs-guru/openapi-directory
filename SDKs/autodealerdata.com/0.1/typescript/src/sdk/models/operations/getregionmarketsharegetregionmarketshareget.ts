import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRegionMarketShareGetRegionMarketShareGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetRegionMarketShareGetRegionMarketShareGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRegionMarketShareGetRegionMarketShareGetQueryParams;
}


export class GetRegionMarketShareGetRegionMarketShareGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  genericResponse?: shared.GenericResponse;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
