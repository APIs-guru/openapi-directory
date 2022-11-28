import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictForSchoolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistrictForSchoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistrictForSchoolPathParams;
}


export class GetDistrictForSchoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  districtResponse?: shared.DistrictResponse;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  statusCode: number;
}
