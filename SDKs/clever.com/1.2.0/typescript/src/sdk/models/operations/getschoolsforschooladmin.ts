import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchoolsForSchoolAdminPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolsForSchoolAdminQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;
}


export class GetSchoolsForSchoolAdminRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchoolsForSchoolAdminPathParams;

  @Metadata()
  queryParams: GetSchoolsForSchoolAdminQueryParams;
}


export class GetSchoolsForSchoolAdminResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  schoolsResponse?: shared.SchoolsResponse;

  @Metadata()
  statusCode: number;
}
