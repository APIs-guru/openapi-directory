import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseStorelayoutclustersUpdatePathParams extends SpeakeasyBase {
    clusterId: string;
    enterpriseId: string;
    pageId: string;
}
export declare class AndroidenterpriseStorelayoutclustersUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseStorelayoutclustersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseStorelayoutclustersUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseStorelayoutclustersUpdatePathParams;
    queryParams: AndroidenterpriseStorelayoutclustersUpdateQueryParams;
    request?: shared.StoreCluster;
    security: AndroidenterpriseStorelayoutclustersUpdateSecurity;
}
export declare class AndroidenterpriseStorelayoutclustersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeCluster?: shared.StoreCluster;
}
