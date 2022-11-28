import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRegionsGetRegionsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;
}


export class GetRegionsGetRegionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRegionsGetRegionsGetQueryParams;
}


export class GetRegionsGetRegionsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  regionResp?: shared.RegionResp;

  @SpeakeasyMetadata()
  statusCode: number;
}
