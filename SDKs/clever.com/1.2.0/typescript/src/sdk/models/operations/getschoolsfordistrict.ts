import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchoolsForDistrictPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolsForDistrictQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=where" })
  where?: string;
}


export class GetSchoolsForDistrictRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchoolsForDistrictPathParams;

  @Metadata()
  queryParams: GetSchoolsForDistrictQueryParams;
}


export class GetSchoolsForDistrictResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  schoolsResponse?: shared.SchoolsResponse;

  @Metadata()
  statusCode: number;
}
