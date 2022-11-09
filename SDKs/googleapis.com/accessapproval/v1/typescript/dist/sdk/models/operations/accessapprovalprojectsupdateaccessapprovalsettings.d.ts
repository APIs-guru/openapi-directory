import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccessapprovalProjectsUpdateAccessApprovalSettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AccessapprovalProjectsUpdateAccessApprovalSettingsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AccessapprovalProjectsUpdateAccessApprovalSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AccessapprovalProjectsUpdateAccessApprovalSettingsRequest extends SpeakeasyBase {
    pathParams: AccessapprovalProjectsUpdateAccessApprovalSettingsPathParams;
    queryParams: AccessapprovalProjectsUpdateAccessApprovalSettingsQueryParams;
    request?: shared.AccessApprovalSettings;
    security: AccessapprovalProjectsUpdateAccessApprovalSettingsSecurity;
}
export declare class AccessapprovalProjectsUpdateAccessApprovalSettingsResponse extends SpeakeasyBase {
    accessApprovalSettings?: shared.AccessApprovalSettings;
    contentType: string;
    statusCode: number;
}
