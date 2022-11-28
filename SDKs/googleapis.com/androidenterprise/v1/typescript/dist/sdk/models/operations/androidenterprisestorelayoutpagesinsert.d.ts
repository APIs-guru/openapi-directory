import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseStorelayoutpagesInsertPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseStorelayoutpagesInsertQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseStorelayoutpagesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseStorelayoutpagesInsertRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseStorelayoutpagesInsertPathParams;
    queryParams: AndroidenterpriseStorelayoutpagesInsertQueryParams;
    request?: shared.StorePage;
    security: AndroidenterpriseStorelayoutpagesInsertSecurity;
}
export declare class AndroidenterpriseStorelayoutpagesInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storePage?: shared.StorePage;
}
