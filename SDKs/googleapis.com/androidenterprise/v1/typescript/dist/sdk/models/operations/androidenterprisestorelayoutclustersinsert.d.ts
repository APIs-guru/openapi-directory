import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseStorelayoutclustersInsertPathParams extends SpeakeasyBase {
    enterpriseId: string;
    pageId: string;
}
export declare class AndroidenterpriseStorelayoutclustersInsertQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseStorelayoutclustersInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseStorelayoutclustersInsertRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseStorelayoutclustersInsertPathParams;
    queryParams: AndroidenterpriseStorelayoutclustersInsertQueryParams;
    request?: shared.StoreCluster;
    security: AndroidenterpriseStorelayoutclustersInsertSecurity;
}
export declare class AndroidenterpriseStorelayoutclustersInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeCluster?: shared.StoreCluster;
}
