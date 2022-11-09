import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerPretargetingConfigPatchPathParams extends SpeakeasyBase {
    accountId: string;
    configId: string;
}
export declare class AdexchangebuyerPretargetingConfigPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerPretargetingConfigPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerPretargetingConfigPatchRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerPretargetingConfigPatchPathParams;
    queryParams: AdexchangebuyerPretargetingConfigPatchQueryParams;
    request?: shared.PretargetingConfig;
    security: AdexchangebuyerPretargetingConfigPatchSecurity;
}
export declare class AdexchangebuyerPretargetingConfigPatchResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
