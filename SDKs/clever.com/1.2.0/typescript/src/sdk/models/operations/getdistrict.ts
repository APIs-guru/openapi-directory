import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistrictQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetDistrictRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistrictPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDistrictQueryParams;
}


export class GetDistrictResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  districtResponse?: shared.DistrictResponse;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  statusCode: number;
}
