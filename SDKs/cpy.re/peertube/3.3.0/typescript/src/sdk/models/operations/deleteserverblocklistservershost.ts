import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteServerBlocklistServersHostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=host" })
  host: string;
}


export class DeleteServerBlocklistServersHostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteServerBlocklistServersHostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteServerBlocklistServersHostPathParams;

  @SpeakeasyMetadata()
  security: DeleteServerBlocklistServersHostSecurity;
}


export class DeleteServerBlocklistServersHostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
