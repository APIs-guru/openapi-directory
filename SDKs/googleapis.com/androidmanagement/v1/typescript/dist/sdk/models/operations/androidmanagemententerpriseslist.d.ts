import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidmanagementEnterprisesListViewEnum {
    EnterpriseViewUnspecified = "ENTERPRISE_VIEW_UNSPECIFIED",
    Basic = "BASIC"
}
export declare class AndroidmanagementEnterprisesListQueryParams extends SpeakeasyBase {
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
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: AndroidmanagementEnterprisesListViewEnum;
}
export declare class AndroidmanagementEnterprisesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidmanagementEnterprisesListRequest extends SpeakeasyBase {
    queryParams: AndroidmanagementEnterprisesListQueryParams;
    security: AndroidmanagementEnterprisesListSecurity;
}
export declare class AndroidmanagementEnterprisesListResponse extends SpeakeasyBase {
    contentType: string;
    listEnterprisesResponse?: shared.ListEnterprisesResponse;
    statusCode: number;
}
