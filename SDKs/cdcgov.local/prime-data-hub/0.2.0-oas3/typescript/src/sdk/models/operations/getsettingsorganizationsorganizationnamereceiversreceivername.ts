import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=receiverName" })
  receiverName: string;
}


export class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams;

  @Metadata()
  security: GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;
}


export class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  receiver?: shared.Receiver;

  @Metadata()
  statusCode: number;
}
