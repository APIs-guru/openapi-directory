import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseStorelayoutpagesGetPathParams extends SpeakeasyBase {
    enterpriseId: string;
    pageId: string;
}
export declare class AndroidenterpriseStorelayoutpagesGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseStorelayoutpagesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseStorelayoutpagesGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseStorelayoutpagesGetPathParams;
    queryParams: AndroidenterpriseStorelayoutpagesGetQueryParams;
    security: AndroidenterpriseStorelayoutpagesGetSecurity;
}
export declare class AndroidenterpriseStorelayoutpagesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storePage?: shared.StorePage;
}
