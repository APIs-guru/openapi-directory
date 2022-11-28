import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=senderName" })
  senderName: string;
}


export class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSettingsOrganizationsOrganizationNameSendersSenderNamePathParams;

  @SpeakeasyMetadata()
  security: DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;
}


export class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sender?: shared.Sender;

  @SpeakeasyMetadata()
  statusCode: number;
}
