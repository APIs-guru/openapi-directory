import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSettingsOrganizationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSettingsOrganizationsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetSettingsOrganizationsSecurity;
}


export class GetSettingsOrganizationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata({ elemType: shared.Organization })
  organizations?: shared.Organization[];

  @Metadata()
  statusCode: number;
}
