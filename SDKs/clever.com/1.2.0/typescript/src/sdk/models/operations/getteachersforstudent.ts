import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeachersForStudentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTeachersForStudentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;
}


export class GetTeachersForStudentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeachersForStudentPathParams;

  @Metadata()
  queryParams: GetTeachersForStudentQueryParams;
}


export class GetTeachersForStudentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;

  @Metadata()
  teachersResponse?: shared.TeachersResponse;
}
