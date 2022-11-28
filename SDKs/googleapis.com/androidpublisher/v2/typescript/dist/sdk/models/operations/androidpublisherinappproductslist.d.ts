import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherInappproductsListPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherInappproductsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startIndex?: number;
    token?: string;
    userIp?: string;
}
export declare class AndroidpublisherInappproductsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherInappproductsListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherInappproductsListPathParams;
    queryParams: AndroidpublisherInappproductsListQueryParams;
    security: AndroidpublisherInappproductsListSecurity;
}
export declare class AndroidpublisherInappproductsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
