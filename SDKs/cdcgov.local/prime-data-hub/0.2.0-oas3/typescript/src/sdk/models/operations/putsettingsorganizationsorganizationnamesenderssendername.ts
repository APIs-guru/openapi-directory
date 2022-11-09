import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=senderName" })
  senderName: string;
}


export class PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Sender;

  @Metadata()
  security: PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;
}


export class PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Sender })
  senders?: shared.Sender[];

  @Metadata()
  statusCode: number;
}
