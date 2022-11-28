import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdmobAccountsAdSourcesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AdmobAccountsAdSourcesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AdmobAccountsAdSourcesListRequest extends SpeakeasyBase {
    pathParams: AdmobAccountsAdSourcesListPathParams;
    queryParams: AdmobAccountsAdSourcesListQueryParams;
}
export declare class AdmobAccountsAdSourcesListResponse extends SpeakeasyBase {
    contentType: string;
    listAdSourcesResponse?: shared.ListAdSourcesResponse;
    statusCode: number;
}
