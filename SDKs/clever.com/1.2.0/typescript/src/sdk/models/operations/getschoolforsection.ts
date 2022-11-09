import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchoolForSectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolForSectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchoolForSectionPathParams;
}


export class GetSchoolForSectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  schoolResponse?: shared.SchoolResponse;

  @Metadata()
  statusCode: number;
}
