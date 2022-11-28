import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChecksSetSuitesPreferencesPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks extends SpeakeasyBase {
    appId: number;
    setting: boolean;
}
export declare class ChecksSetSuitesPreferencesRequestBody extends SpeakeasyBase {
    autoTriggerChecks?: ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks[];
}
export declare class ChecksSetSuitesPreferencesRequest extends SpeakeasyBase {
    pathParams: ChecksSetSuitesPreferencesPathParams;
    request?: ChecksSetSuitesPreferencesRequestBody;
}
export declare class ChecksSetSuitesPreferencesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkSuitePreference?: shared.CheckSuitePreference;
}
