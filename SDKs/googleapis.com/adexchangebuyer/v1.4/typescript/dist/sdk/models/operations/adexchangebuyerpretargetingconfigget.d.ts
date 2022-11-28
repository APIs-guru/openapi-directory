import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerPretargetingConfigGetPathParams extends SpeakeasyBase {
    accountId: string;
    configId: string;
}
export declare class AdexchangebuyerPretargetingConfigGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerPretargetingConfigGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerPretargetingConfigGetRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerPretargetingConfigGetPathParams;
    queryParams: AdexchangebuyerPretargetingConfigGetQueryParams;
    security: AdexchangebuyerPretargetingConfigGetSecurity;
}
export declare class AdexchangebuyerPretargetingConfigGetResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfig?: shared.PretargetingConfig;
    statusCode: number;
}
