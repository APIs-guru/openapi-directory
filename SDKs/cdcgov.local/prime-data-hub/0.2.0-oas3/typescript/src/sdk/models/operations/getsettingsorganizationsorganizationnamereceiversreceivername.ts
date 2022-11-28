import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=receiverName" })
  receiverName: string;
}


export class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams;

  @SpeakeasyMetadata()
  security: GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;
}


export class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  receiver?: shared.Receiver;

  @SpeakeasyMetadata()
  statusCode: number;
}
