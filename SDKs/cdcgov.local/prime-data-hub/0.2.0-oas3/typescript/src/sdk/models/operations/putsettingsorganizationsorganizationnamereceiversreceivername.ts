import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=receiverName" })
  receiverName: string;
}


export class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Receiver;

  @Metadata()
  security: PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;
}


export class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  receiver?: shared.Receiver;

  @Metadata()
  statusCode: number;
}
