import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistrictQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetDistrictRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistrictPathParams;

  @Metadata()
  queryParams: GetDistrictQueryParams;
}


export class GetDistrictResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  districtResponse?: shared.DistrictResponse;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;
}
