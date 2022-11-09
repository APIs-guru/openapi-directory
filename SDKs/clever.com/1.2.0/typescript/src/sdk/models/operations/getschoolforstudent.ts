import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchoolForStudentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolForStudentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchoolForStudentPathParams;
}


export class GetSchoolForStudentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  schoolResponse?: shared.SchoolResponse;

  @Metadata()
  statusCode: number;
}
