import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseStorelayoutpagesUpdatePathParams extends SpeakeasyBase {
    enterpriseId: string;
    pageId: string;
}
export declare class AndroidenterpriseStorelayoutpagesUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseStorelayoutpagesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseStorelayoutpagesUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseStorelayoutpagesUpdatePathParams;
    queryParams: AndroidenterpriseStorelayoutpagesUpdateQueryParams;
    request?: shared.StorePage;
    security: AndroidenterpriseStorelayoutpagesUpdateSecurity;
}
export declare class AndroidenterpriseStorelayoutpagesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storePage?: shared.StorePage;
}
