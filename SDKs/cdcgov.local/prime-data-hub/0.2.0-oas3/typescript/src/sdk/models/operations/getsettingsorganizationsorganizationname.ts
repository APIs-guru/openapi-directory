import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingsOrganizationsOrganizationNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;
}


export class GetSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingsOrganizationsOrganizationNamePathParams;

  @SpeakeasyMetadata()
  security: GetSettingsOrganizationsOrganizationNameSecurity;
}


export class GetSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organization?: shared.Organization;

  @SpeakeasyMetadata()
  statusCode: number;
}
