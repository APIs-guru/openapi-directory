import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AndroidpublisherInapppurchasesGetPathParams extends SpeakeasyBase {
    packageName: string;
    productId: string;
    token: string;
}
export declare class AndroidpublisherInapppurchasesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AndroidpublisherInapppurchasesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidpublisherInapppurchasesGetRequest extends SpeakeasyBase {
    pathParams: AndroidpublisherInapppurchasesGetPathParams;
    queryParams: AndroidpublisherInapppurchasesGetQueryParams;
    security: AndroidpublisherInapppurchasesGetSecurity;
}
export declare class AndroidpublisherInapppurchasesGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
