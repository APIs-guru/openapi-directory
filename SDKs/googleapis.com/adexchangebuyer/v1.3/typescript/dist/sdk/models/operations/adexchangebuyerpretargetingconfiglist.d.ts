import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdexchangebuyerPretargetingConfigListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AdexchangebuyerPretargetingConfigListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdexchangebuyerPretargetingConfigListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdexchangebuyerPretargetingConfigListRequest extends SpeakeasyBase {
    pathParams: AdexchangebuyerPretargetingConfigListPathParams;
    queryParams: AdexchangebuyerPretargetingConfigListQueryParams;
    security: AdexchangebuyerPretargetingConfigListSecurity;
}
export declare class AdexchangebuyerPretargetingConfigListResponse extends SpeakeasyBase {
    contentType: string;
    pretargetingConfigList?: shared.PretargetingConfigList;
    statusCode: number;
}
