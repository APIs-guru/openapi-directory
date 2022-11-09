import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictAdminsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_before" })
  endingBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=show_links" })
  showLinks?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=starting_after" })
  startingAfter?: string;
}


export class GetDistrictAdminsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDistrictAdminsQueryParams;
}


export class GetDistrictAdminsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  districtAdminsResponse?: shared.DistrictAdminsResponse;

  @Metadata()
  statusCode: number;
}
