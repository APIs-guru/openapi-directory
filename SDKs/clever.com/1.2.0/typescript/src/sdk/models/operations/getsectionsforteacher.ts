import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSectionsForTeacherPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSectionsForTeacherQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;
}


export class GetSectionsForTeacherRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSectionsForTeacherPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSectionsForTeacherQueryParams;
}


export class GetSectionsForTeacherResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  sectionsResponse?: shared.SectionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
