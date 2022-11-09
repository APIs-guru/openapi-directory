import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=senderName" })
  senderName: string;
}


export class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams;

  @Metadata()
  security: DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;
}


export class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sender?: shared.Sender;

  @Metadata()
  statusCode: number;
}
