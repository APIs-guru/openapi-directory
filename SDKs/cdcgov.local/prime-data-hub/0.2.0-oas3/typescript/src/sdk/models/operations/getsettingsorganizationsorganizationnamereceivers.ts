import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSettingsOrganizationsOrganizationNameReceiversPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;
}


export class GetSettingsOrganizationsOrganizationNameReceiversSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsOrganizationNameReceiversRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingsOrganizationsOrganizationNameReceiversPathParams;

  @Metadata()
  security: GetSettingsOrganizationsOrganizationNameReceiversSecurity;
}


export class GetSettingsOrganizationsOrganizationNameReceiversResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Receiver })
  receivers?: shared.Receiver[];

  @Metadata()
  statusCode: number;
}
