import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictForTeacherPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistrictForTeacherRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistrictForTeacherPathParams;
}


export class GetDistrictForTeacherResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  districtResponse?: shared.DistrictResponse;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;
}
