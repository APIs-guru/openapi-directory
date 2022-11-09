import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStudentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetStudentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudentPathParams;

  @Metadata()
  queryParams: GetStudentQueryParams;
}


export class GetStudentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;

  @Metadata()
  studentResponse?: shared.StudentResponse;
}
