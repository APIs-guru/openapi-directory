import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictAdminsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_links" })
  showLinks?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;
}


export class GetDistrictAdminsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDistrictAdminsQueryParams;
}


export class GetDistrictAdminsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  districtAdminsResponse?: shared.DistrictAdminsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
