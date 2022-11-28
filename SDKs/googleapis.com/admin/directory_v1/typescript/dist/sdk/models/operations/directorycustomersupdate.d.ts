import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryCustomersUpdatePathParams extends SpeakeasyBase {
    customerKey: string;
}
export declare class DirectoryCustomersUpdateQueryParams extends SpeakeasyBase {
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
export declare class DirectoryCustomersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryCustomersUpdateRequest extends SpeakeasyBase {
    pathParams: DirectoryCustomersUpdatePathParams;
    queryParams: DirectoryCustomersUpdateQueryParams;
    request?: shared.Customer;
    security: DirectoryCustomersUpdateSecurity;
}
export declare class DirectoryCustomersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    statusCode: number;
}
