import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStudentsForDistrictPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudentsForDistrictQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=where" })
  where?: string;
}


export class GetStudentsForDistrictRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudentsForDistrictPathParams;

  @Metadata()
  queryParams: GetStudentsForDistrictQueryParams;
}


export class GetStudentsForDistrictResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;

  @Metadata()
  studentsResponse?: shared.StudentsResponse;
}
