import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HeadSettingsOrganizationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class HeadSettingsOrganizationsRequest extends SpeakeasyBase {
  @Metadata()
  security: HeadSettingsOrganizationsSecurity;
}


export class HeadSettingsOrganizationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
