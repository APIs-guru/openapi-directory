import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerPretargetingConfigDeletePathParams extends SpeakeasyBase {
    accountId: string;
    configId: string;
}
export declare class AdexchangebuyerPretargetingConfigDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerPretargetingConfigDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerPretargetingConfigDeleteRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerPretargetingConfigDeletePathParams;
    queryParams: AdexchangebuyerPretargetingConfigDeleteQueryParams;
    security: AdexchangebuyerPretargetingConfigDeleteSecurity;
}
export declare class AdexchangebuyerPretargetingConfigDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
