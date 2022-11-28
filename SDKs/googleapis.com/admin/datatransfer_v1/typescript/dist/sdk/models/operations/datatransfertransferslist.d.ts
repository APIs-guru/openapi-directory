import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatatransferTransfersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerId?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    newOwnerUserId?: string;
    oauthToken?: string;
    oldOwnerUserId?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    status?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatatransferTransfersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatatransferTransfersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatatransferTransfersListSecurity extends SpeakeasyBase {
    option1?: DatatransferTransfersListSecurityOption1;
    option2?: DatatransferTransfersListSecurityOption2;
}
export declare class DatatransferTransfersListRequest extends SpeakeasyBase {
    queryParams: DatatransferTransfersListQueryParams;
    security: DatatransferTransfersListSecurity;
}
export declare class DatatransferTransfersListResponse extends SpeakeasyBase {
    contentType: string;
    dataTransfersListResponse?: shared.DataTransfersListResponse;
    statusCode: number;
}
