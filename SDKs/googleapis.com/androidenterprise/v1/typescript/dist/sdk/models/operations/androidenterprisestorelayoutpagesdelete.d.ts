import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseStorelayoutpagesDeletePathParams extends SpeakeasyBase {
    enterpriseId: string;
    pageId: string;
}
export declare class AndroidenterpriseStorelayoutpagesDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseStorelayoutpagesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseStorelayoutpagesDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseStorelayoutpagesDeletePathParams;
    queryParams: AndroidenterpriseStorelayoutpagesDeleteQueryParams;
    security: AndroidenterpriseStorelayoutpagesDeleteSecurity;
}
export declare class AndroidenterpriseStorelayoutpagesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
