import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictForStudentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistrictForStudentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistrictForStudentPathParams;
}


export class GetDistrictForStudentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  districtResponse?: shared.DistrictResponse;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;
}
