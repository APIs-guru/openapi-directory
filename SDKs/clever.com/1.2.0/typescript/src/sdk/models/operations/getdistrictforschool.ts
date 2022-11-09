import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictForSchoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistrictForSchoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistrictForSchoolPathParams;
}


export class GetDistrictForSchoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  districtResponse?: shared.DistrictResponse;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;
}
