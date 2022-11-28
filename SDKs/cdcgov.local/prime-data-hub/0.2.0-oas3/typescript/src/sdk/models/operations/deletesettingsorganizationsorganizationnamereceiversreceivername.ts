import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=receiverName" })
  receiverName: string;
}


export class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNamePathParams;

  @SpeakeasyMetadata()
  security: DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;
}


export class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  receiver?: shared.Receiver;

  @SpeakeasyMetadata()
  statusCode: number;
}
