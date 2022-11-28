import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingsOrganizationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetSettingsOrganizationsSecurity;
}


export class GetSettingsOrganizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.Organization })
  organizations?: shared.Organization[];

  @SpeakeasyMetadata()
  statusCode: number;
}
