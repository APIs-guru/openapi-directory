import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSectionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=where" })
  where?: string;
}


export class GetSectionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSectionsQueryParams;
}


export class GetSectionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sectionsResponse?: shared.SectionsResponse;

  @Metadata()
  statusCode: number;
}
