import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatatransferTransfersGetPathParams extends SpeakeasyBase {
    dataTransferId: string;
}
export declare class DatatransferTransfersGetQueryParams extends SpeakeasyBase {
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
export declare class DatatransferTransfersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatatransferTransfersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatatransferTransfersGetSecurity extends SpeakeasyBase {
    option1?: DatatransferTransfersGetSecurityOption1;
    option2?: DatatransferTransfersGetSecurityOption2;
}
export declare class DatatransferTransfersGetRequest extends SpeakeasyBase {
    pathParams: DatatransferTransfersGetPathParams;
    queryParams: DatatransferTransfersGetQueryParams;
    security: DatatransferTransfersGetSecurity;
}
export declare class DatatransferTransfersGetResponse extends SpeakeasyBase {
    contentType: string;
    dataTransfer?: shared.DataTransfer;
    statusCode: number;
}
