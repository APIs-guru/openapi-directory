import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostAdclientsGetPathParams extends SpeakeasyBase {
    adClientId: string;
}
export declare class AdsensehostAdclientsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAdclientsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAdclientsGetRequest extends SpeakeasyBase {
    pathParams: AdsensehostAdclientsGetPathParams;
    queryParams: AdsensehostAdclientsGetQueryParams;
    security: AdsensehostAdclientsGetSecurity;
}
export declare class AdsensehostAdclientsGetResponse extends SpeakeasyBase {
    adClient?: shared.AdClient;
    contentType: string;
    statusCode: number;
}
