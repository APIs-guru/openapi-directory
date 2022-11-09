import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeacherPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTeacherQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetTeacherRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeacherPathParams;

  @Metadata()
  queryParams: GetTeacherQueryParams;
}


export class GetTeacherResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;

  @Metadata()
  teacherResponse?: shared.TeacherResponse;
}
