import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchoolForTeacherPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolForTeacherRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchoolForTeacherPathParams;
}


export class GetSchoolForTeacherResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  schoolResponse?: shared.SchoolResponse;

  @Metadata()
  statusCode: number;
}
