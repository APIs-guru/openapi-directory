import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSettingsOrganizationsOrganizationNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;
}


export class PutSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSettingsOrganizationsOrganizationNamePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Organization1;

  @SpeakeasyMetadata()
  security: PutSettingsOrganizationsOrganizationNameSecurity;
}


export class PutSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organization?: shared.Organization;

  @SpeakeasyMetadata()
  statusCode: number;
}
