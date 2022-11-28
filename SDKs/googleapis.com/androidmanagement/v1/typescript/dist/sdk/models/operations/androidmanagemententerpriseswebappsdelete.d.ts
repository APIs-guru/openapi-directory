import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidmanagementEnterprisesWebAppsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare enum AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum {
    WipeDataFlagUnspecified = "WIPE_DATA_FLAG_UNSPECIFIED",
    PreserveResetProtectionData = "PRESERVE_RESET_PROTECTION_DATA",
    WipeExternalStorage = "WIPE_EXTERNAL_STORAGE"
}
export declare class AndroidmanagementEnterprisesWebAppsDeleteQueryParams extends SpeakeasyBase {
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
    wipeDataFlags?: AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum[];
    wipeReasonMessage?: string;
}
export declare class AndroidmanagementEnterprisesWebAppsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementEnterprisesWebAppsDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidmanagementEnterprisesWebAppsDeletePathParams;
    queryParams: AndroidmanagementEnterprisesWebAppsDeleteQueryParams;
    security: AndroidmanagementEnterprisesWebAppsDeleteSecurity;
}
export declare class AndroidmanagementEnterprisesWebAppsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
