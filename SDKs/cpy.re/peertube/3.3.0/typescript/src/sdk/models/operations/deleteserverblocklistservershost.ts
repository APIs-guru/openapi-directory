import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteServerBlocklistServersHostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=host" })
  host: string;
}


export class DeleteServerBlocklistServersHostSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteServerBlocklistServersHostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteServerBlocklistServersHostPathParams;

  @Metadata()
  security: DeleteServerBlocklistServersHostSecurity;
}


export class DeleteServerBlocklistServersHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
