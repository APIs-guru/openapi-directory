import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidpublisherPurchasesVoidedpurchasesListPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class AndroidpublisherPurchasesVoidedpurchasesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    endTime?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startIndex?: number;
    startTime?: string;
    token?: string;
    userIp?: string;
}
export declare class AndroidpublisherPurchasesVoidedpurchasesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherPurchasesVoidedpurchasesListRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherPurchasesVoidedpurchasesListPathParams;
    queryParams: AndroidpublisherPurchasesVoidedpurchasesListQueryParams;
    security: AndroidpublisherPurchasesVoidedpurchasesListSecurity;
}
export declare class AndroidpublisherPurchasesVoidedpurchasesListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
