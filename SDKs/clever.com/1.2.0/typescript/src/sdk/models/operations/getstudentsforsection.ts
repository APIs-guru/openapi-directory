import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStudentsForSectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudentsForSectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;
}


export class GetStudentsForSectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudentsForSectionPathParams;

  @Metadata()
  queryParams: GetStudentsForSectionQueryParams;
}


export class GetStudentsForSectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;

  @Metadata()
  studentsResponse?: shared.StudentsResponse;
}
