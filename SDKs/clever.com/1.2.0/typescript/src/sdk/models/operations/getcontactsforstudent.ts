import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetContactsForStudentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetContactsForStudentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetContactsForStudentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContactsForStudentPathParams;

  @Metadata()
  queryParams: GetContactsForStudentQueryParams;
}


export class GetContactsForStudentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;

  @Metadata()
  studentContactsForStudentResponse?: shared.StudentContactsForStudentResponse;
}
