import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSettingsOrganizationsOrganizationNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;
}


export class PutSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSettingsOrganizationsOrganizationNamePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Organization;

  @Metadata()
  security: PutSettingsOrganizationsOrganizationNameSecurity;
}


export class PutSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  organization?: shared.Organization;

  @Metadata()
  statusCode: number;
}
