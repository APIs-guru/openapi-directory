import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingsOrganizationsOrganizationNameSendersSenderNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=senderName" })
  senderName: string;
}


export class GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingsOrganizationsOrganizationNameSendersSenderNamePathParams;

  @SpeakeasyMetadata()
  security: GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;
}


export class GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sender?: shared.Sender;

  @SpeakeasyMetadata()
  statusCode: number;
}
