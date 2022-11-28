import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSchoolsForDistrictPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolsForDistrictQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=where" })
  where?: string;
}


export class GetSchoolsForDistrictRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchoolsForDistrictPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSchoolsForDistrictQueryParams;
}


export class GetSchoolsForDistrictResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  schoolsResponse?: shared.SchoolsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
