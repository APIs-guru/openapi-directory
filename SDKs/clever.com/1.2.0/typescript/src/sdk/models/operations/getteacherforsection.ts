import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeacherForSectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTeacherForSectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeacherForSectionPathParams;
}


export class GetTeacherForSectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;

  @Metadata()
  teacherResponse?: shared.TeacherResponse;
}
