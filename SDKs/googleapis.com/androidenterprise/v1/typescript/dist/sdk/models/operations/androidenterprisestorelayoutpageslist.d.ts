import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseStorelayoutpagesListPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseStorelayoutpagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseStorelayoutpagesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseStorelayoutpagesListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseStorelayoutpagesListPathParams;
    queryParams: AndroidenterpriseStorelayoutpagesListQueryParams;
    security: AndroidenterpriseStorelayoutpagesListSecurity;
}
export declare class AndroidenterpriseStorelayoutpagesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeLayoutPagesListResponse?: shared.StoreLayoutPagesListResponse;
}
