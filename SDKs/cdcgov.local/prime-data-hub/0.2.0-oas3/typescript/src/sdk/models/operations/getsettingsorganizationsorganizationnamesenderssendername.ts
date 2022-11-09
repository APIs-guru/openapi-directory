import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSettingsOrganizationsOrganizationNameSendersSenderNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=senderName" })
  senderName: string;
}


export class GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingsOrganizationsOrganizationNameSendersSenderNamePathParams;

  @Metadata()
  security: GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;
}


export class GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sender?: shared.Sender;

  @Metadata()
  statusCode: number;
}
