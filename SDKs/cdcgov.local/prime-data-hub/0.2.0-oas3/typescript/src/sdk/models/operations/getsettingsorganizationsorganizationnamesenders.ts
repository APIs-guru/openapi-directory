import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSettingsOrganizationsOrganizationNameSendersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;
}


export class GetSettingsOrganizationsOrganizationNameSendersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsOrganizationNameSendersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingsOrganizationsOrganizationNameSendersPathParams;

  @Metadata()
  security: GetSettingsOrganizationsOrganizationNameSendersSecurity;
}


export class GetSettingsOrganizationsOrganizationNameSendersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Sender })
  senders?: shared.Sender[];

  @Metadata()
  statusCode: number;
}
