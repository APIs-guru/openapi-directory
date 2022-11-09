import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSectionsForTeacherPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSectionsForTeacherQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;
}


export class GetSectionsForTeacherRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSectionsForTeacherPathParams;

  @Metadata()
  queryParams: GetSectionsForTeacherQueryParams;
}


export class GetSectionsForTeacherResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  sectionsResponse?: shared.SectionsResponse;

  @Metadata()
  statusCode: number;
}
