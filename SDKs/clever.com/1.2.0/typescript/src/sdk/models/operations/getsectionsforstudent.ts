import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSectionsForStudentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSectionsForStudentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;
}


export class GetSectionsForStudentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSectionsForStudentPathParams;

  @Metadata()
  queryParams: GetSectionsForStudentQueryParams;
}


export class GetSectionsForStudentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  sectionsResponse?: shared.SectionsResponse;

  @Metadata()
  statusCode: number;
}
