import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostAdclientsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAdclientsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAdclientsListRequest extends SpeakeasyBase {
    queryParams: AdsensehostAdclientsListQueryParams;
    security: AdsensehostAdclientsListSecurity;
}
export declare class AdsensehostAdclientsListResponse extends SpeakeasyBase {
    adClients?: shared.AdClients;
    contentType: string;
    statusCode: number;
}
