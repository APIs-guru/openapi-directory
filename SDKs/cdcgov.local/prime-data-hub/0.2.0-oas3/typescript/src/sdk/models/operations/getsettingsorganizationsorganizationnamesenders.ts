import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingsOrganizationsOrganizationNameSendersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;
}


export class GetSettingsOrganizationsOrganizationNameSendersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsOrganizationNameSendersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingsOrganizationsOrganizationNameSendersPathParams;

  @SpeakeasyMetadata()
  security: GetSettingsOrganizationsOrganizationNameSendersSecurity;
}


export class GetSettingsOrganizationsOrganizationNameSendersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Sender })
  senders?: shared.Sender[];

  @SpeakeasyMetadata()
  statusCode: number;
}
