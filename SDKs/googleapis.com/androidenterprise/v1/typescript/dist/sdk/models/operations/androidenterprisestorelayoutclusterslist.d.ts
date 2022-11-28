import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseStorelayoutclustersListPathParams extends SpeakeasyBase {
    enterpriseId: string;
    pageId: string;
}
export declare class AndroidenterpriseStorelayoutclustersListQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseStorelayoutclustersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseStorelayoutclustersListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseStorelayoutclustersListPathParams;
    queryParams: AndroidenterpriseStorelayoutclustersListQueryParams;
    security: AndroidenterpriseStorelayoutclustersListSecurity;
}
export declare class AndroidenterpriseStorelayoutclustersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeLayoutClustersListResponse?: shared.StoreLayoutClustersListResponse;
}
