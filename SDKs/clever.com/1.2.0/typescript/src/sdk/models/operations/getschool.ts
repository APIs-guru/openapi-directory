import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSchoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSchoolPathParams;
}


export class GetSchoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  schoolResponse?: shared.SchoolResponse;

  @Metadata()
  statusCode: number;
}
