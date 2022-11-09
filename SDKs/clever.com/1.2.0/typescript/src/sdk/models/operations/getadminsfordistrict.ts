import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAdminsForDistrictPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAdminsForDistrictRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAdminsForDistrictPathParams;
}


export class GetAdminsForDistrictResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  districtAdminsResponse?: shared.DistrictAdminsResponse;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;
}
