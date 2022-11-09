import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTlskeyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetTlskeyRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetTlskeyHeaders;
}


export class GetTlskeyResponse extends SpeakeasyBase {
  @Metadata()
  certificate?: shared.Certificate;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
