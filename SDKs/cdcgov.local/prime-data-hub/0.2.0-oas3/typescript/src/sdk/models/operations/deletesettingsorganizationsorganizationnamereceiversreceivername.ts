import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=receiverName" })
  receiverName: string;
}


export class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams;

  @Metadata()
  security: DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;
}


export class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  receiver?: shared.Receiver;

  @Metadata()
  statusCode: number;
}
