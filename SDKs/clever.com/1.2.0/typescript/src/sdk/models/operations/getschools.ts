import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchoolsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=where" })
  where?: string;
}


export class GetSchoolsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchoolsQueryParams;
}


export class GetSchoolsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  schoolsResponse?: shared.SchoolsResponse;

  @Metadata()
  statusCode: number;
}
