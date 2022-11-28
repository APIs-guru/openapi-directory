import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DirectoryCustomersPatchPathParams extends SpeakeasyBase {
    customerKey: string;
}
export declare class DirectoryCustomersPatchQueryParams extends SpeakeasyBase {
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
export declare class DirectoryCustomersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DirectoryCustomersPatchRequest extends SpeakeasyBase {
    pathParams: DirectoryCustomersPatchPathParams;
    queryParams: DirectoryCustomersPatchQueryParams;
    request?: shared.Customer;
    security: DirectoryCustomersPatchSecurity;
}
export declare class DirectoryCustomersPatchResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    statusCode: number;
}
