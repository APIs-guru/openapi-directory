import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryChromeosdevicesListPathParams extends SpeakeasyBase {
    customerId: string;
}
export declare enum DirectoryChromeosdevicesListOrderByEnum {
    AnnotatedLocation = "annotatedLocation",
    AnnotatedUser = "annotatedUser",
    LastSync = "lastSync",
    Notes = "notes",
    SerialNumber = "serialNumber",
    Status = "status"
}
export declare enum DirectoryChromeosdevicesListProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare enum DirectoryChromeosdevicesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DirectoryChromeosdevicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeChildOrgunits?: boolean;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: DirectoryChromeosdevicesListOrderByEnum;
    orgUnitPath?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    projection?: DirectoryChromeosdevicesListProjectionEnum;
    query?: string;
    quotaUser?: string;
    sortOrder?: DirectoryChromeosdevicesListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryChromeosdevicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryChromeosdevicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryChromeosdevicesListSecurity extends SpeakeasyBase {
    option1?: DirectoryChromeosdevicesListSecurityOption1;
    option2?: DirectoryChromeosdevicesListSecurityOption2;
}
export declare class DirectoryChromeosdevicesListRequest extends SpeakeasyBase {
    pathParams: DirectoryChromeosdevicesListPathParams;
    queryParams: DirectoryChromeosdevicesListQueryParams;
    security: DirectoryChromeosdevicesListSecurity;
}
export declare class DirectoryChromeosdevicesListResponse extends SpeakeasyBase {
    chromeOsDevices?: shared.ChromeOsDevices;
    contentType: string;
    statusCode: number;
}
