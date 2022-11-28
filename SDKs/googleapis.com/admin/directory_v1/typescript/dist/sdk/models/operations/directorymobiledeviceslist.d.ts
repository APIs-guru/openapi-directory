import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryMobiledevicesListPathParams extends SpeakeasyBase {
    customerId: string;
}
export declare enum DirectoryMobiledevicesListOrderByEnum {
    DeviceId = "deviceId",
    Email = "email",
    LastSync = "lastSync",
    Model = "model",
    Name = "name",
    Os = "os",
    Status = "status",
    Type = "type"
}
export declare enum DirectoryMobiledevicesListProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare enum DirectoryMobiledevicesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DirectoryMobiledevicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: DirectoryMobiledevicesListOrderByEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    projection?: DirectoryMobiledevicesListProjectionEnum;
    query?: string;
    quotaUser?: string;
    sortOrder?: DirectoryMobiledevicesListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DirectoryMobiledevicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMobiledevicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMobiledevicesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryMobiledevicesListSecurity extends SpeakeasyBase {
    option1?: DirectoryMobiledevicesListSecurityOption1;
    option2?: DirectoryMobiledevicesListSecurityOption2;
    option3?: DirectoryMobiledevicesListSecurityOption3;
}
export declare class DirectoryMobiledevicesListRequest extends SpeakeasyBase {
    pathParams: DirectoryMobiledevicesListPathParams;
    queryParams: DirectoryMobiledevicesListQueryParams;
    security: DirectoryMobiledevicesListSecurity;
}
export declare class DirectoryMobiledevicesListResponse extends SpeakeasyBase {
    contentType: string;
    mobileDevices?: shared.MobileDevices;
    statusCode: number;
}
