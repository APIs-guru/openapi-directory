import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictForTeacherPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistrictForTeacherRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistrictForTeacherPathParams;
}


export class GetDistrictForTeacherResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  districtResponse?: shared.DistrictResponse;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  statusCode: number;
}
