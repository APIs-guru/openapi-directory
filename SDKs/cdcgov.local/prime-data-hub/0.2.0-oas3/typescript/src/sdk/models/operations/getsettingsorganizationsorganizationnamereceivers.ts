import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingsOrganizationsOrganizationNameReceiversPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationName" })
  organizationName: string;
}


export class GetSettingsOrganizationsOrganizationNameReceiversSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsOrganizationNameReceiversRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingsOrganizationsOrganizationNameReceiversPathParams;

  @SpeakeasyMetadata()
  security: GetSettingsOrganizationsOrganizationNameReceiversSecurity;
}


export class GetSettingsOrganizationsOrganizationNameReceiversResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Receiver })
  receivers?: shared.Receiver[];

  @SpeakeasyMetadata()
  statusCode: number;
}
