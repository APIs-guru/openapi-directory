import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadSettingsOrganizationsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class HeadSettingsOrganizationsRequest extends SpeakeasyBase {
    security: HeadSettingsOrganizationsSecurity;
}
export declare class HeadSettingsOrganizationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
