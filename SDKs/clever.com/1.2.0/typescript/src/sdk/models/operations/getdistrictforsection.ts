import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictForSectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDistrictForSectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistrictForSectionPathParams;
}


export class GetDistrictForSectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  districtResponse?: shared.DistrictResponse;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  statusCode: number;
}
