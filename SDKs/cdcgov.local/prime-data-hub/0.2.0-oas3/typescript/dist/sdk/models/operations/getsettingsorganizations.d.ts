import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSettingsOrganizationsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetSettingsOrganizationsRequest extends SpeakeasyBase {
    security: GetSettingsOrganizationsSecurity;
}
export declare class GetSettingsOrganizationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    organizations?: shared.Organization[];
    statusCode: number;
}
