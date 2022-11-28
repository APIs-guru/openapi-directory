import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=senderName" })
  senderName: string;
}


export class PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSettingsOrganizationsOrganizationNameSendersSenderNamePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SenderInput;

  @SpeakeasyMetadata()
  security: PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;
}


export class PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Sender })
  senders?: shared.Sender[];

  @SpeakeasyMetadata()
  statusCode: number;
}
