import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSettingsOrganizationsOrganizationNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;
}


export class DeleteSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSettingsOrganizationsOrganizationNamePathParams;

  @SpeakeasyMetadata()
  security: DeleteSettingsOrganizationsOrganizationNameSecurity;
}


export class DeleteSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organization?: shared.Organization;

  @SpeakeasyMetadata()
  statusCode: number;
}
