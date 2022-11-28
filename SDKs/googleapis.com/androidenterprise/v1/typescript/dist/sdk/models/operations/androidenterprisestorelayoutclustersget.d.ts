import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseStorelayoutclustersGetPathParams extends SpeakeasyBase {
    clusterId: string;
    enterpriseId: string;
    pageId: string;
}
export declare class AndroidenterpriseStorelayoutclustersGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseStorelayoutclustersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseStorelayoutclustersGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseStorelayoutclustersGetPathParams;
    queryParams: AndroidenterpriseStorelayoutclustersGetQueryParams;
    security: AndroidenterpriseStorelayoutclustersGetSecurity;
}
export declare class AndroidenterpriseStorelayoutclustersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeCluster?: shared.StoreCluster;
}
