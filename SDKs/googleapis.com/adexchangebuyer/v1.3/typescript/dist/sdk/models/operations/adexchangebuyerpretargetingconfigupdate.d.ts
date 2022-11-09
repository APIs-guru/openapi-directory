import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerPretargetingConfigUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    configId: string;
}
export declare class AdexchangebuyerPretargetingConfigUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerPretargetingConfigUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerPretargetingConfigUpdateRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerPretargetingConfigUpdatePathParams;
    queryParams: AdexchangebuyerPretargetingConfigUpdateQueryParams;
    request?: shared.PretargetingConfig;
    security: AdexchangebuyerPretargetingConfigUpdateSecurity;
}
export declare class AdexchangebuyerPretargetingConfigUpdateResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
