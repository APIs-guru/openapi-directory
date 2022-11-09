import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictAdminPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistrictAdminRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistrictAdminPathParams;
}


export class GetDistrictAdminResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  districtAdminResponse?: shared.DistrictAdminResponse;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;
}
