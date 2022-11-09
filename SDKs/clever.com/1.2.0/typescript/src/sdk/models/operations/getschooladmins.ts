import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchoolAdminsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=where" })
  where?: string;
}


export class GetSchoolAdminsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSchoolAdminsQueryParams;
}


export class GetSchoolAdminsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  schoolAdminsResponse?: shared.SchoolAdminsResponse;

  @Metadata()
  statusCode: number;
}
