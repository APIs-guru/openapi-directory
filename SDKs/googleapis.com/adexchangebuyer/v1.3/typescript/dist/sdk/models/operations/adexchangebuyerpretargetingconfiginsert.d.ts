import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerPretargetingConfigInsertPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AdexchangebuyerPretargetingConfigInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerPretargetingConfigInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerPretargetingConfigInsertRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerPretargetingConfigInsertPathParams;
    queryParams: AdexchangebuyerPretargetingConfigInsertQueryParams;
    request?: shared.PretargetingConfig;
    security: AdexchangebuyerPretargetingConfigInsertSecurity;
}
export declare class AdexchangebuyerPretargetingConfigInsertResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
