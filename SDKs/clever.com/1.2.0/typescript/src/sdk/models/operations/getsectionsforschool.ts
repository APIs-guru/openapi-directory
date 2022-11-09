import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSectionsForSchoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSectionsForSchoolQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=where" })
  where?: string;
}


export class GetSectionsForSchoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSectionsForSchoolPathParams;

  @Metadata()
  queryParams: GetSectionsForSchoolQueryParams;
}


export class GetSectionsForSchoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  sectionsResponse?: shared.SectionsResponse;

  @Metadata()
  statusCode: number;
}
