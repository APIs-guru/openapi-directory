import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitPathParams;
    queryParams: BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitQueryParams;
    request?: shared.SubmitProvisioningConfigRequestInput;
    security: BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    submitProvisioningConfigResponse?: shared.SubmitProvisioningConfigResponse;
}
