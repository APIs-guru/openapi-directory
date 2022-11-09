import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSettingsOrganizationsOrganizationNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;
}


export class DeleteSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSettingsOrganizationsOrganizationNamePathParams;

  @Metadata()
  security: DeleteSettingsOrganizationsOrganizationNameSecurity;
}


export class DeleteSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  organization?: shared.Organization;

  @Metadata()
  statusCode: number;
}
