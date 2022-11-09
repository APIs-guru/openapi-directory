import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSettingsOrganizationsOrganizationNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;
}


export class GetSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSettingsOrganizationsOrganizationNamePathParams;

  @Metadata()
  security: GetSettingsOrganizationsOrganizationNameSecurity;
}


export class GetSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  organization?: shared.Organization;

  @Metadata()
  statusCode: number;
}
