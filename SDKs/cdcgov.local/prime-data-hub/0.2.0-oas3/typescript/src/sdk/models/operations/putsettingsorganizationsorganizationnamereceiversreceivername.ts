import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=receiverName" })
  receiverName: string;
}


export class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ReceiverInput;

  @SpeakeasyMetadata()
  security: PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;
}


export class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  receiver?: shared.Receiver;

  @SpeakeasyMetadata()
  statusCode: number;
}
