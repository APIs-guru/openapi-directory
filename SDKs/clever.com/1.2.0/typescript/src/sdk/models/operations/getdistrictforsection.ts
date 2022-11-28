import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictForSectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistrictForSectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistrictForSectionPathParams;
}


export class GetDistrictForSectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  districtResponse?: shared.DistrictResponse;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  statusCode: number;
}
