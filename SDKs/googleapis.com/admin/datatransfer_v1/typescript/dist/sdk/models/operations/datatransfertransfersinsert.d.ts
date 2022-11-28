import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatatransferTransfersInsertQueryParams extends SpeakeasyBase {
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
export declare class DatatransferTransfersInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatatransferTransfersInsertRequest extends SpeakeasyBase {
    queryParams: DatatransferTransfersInsertQueryParams;
    request?: shared.DataTransfer;
    security: DatatransferTransfersInsertSecurity;
}
export declare class DatatransferTransfersInsertResponse extends SpeakeasyBase {
    contentType: string;
    dataTransfer?: shared.DataTransfer;
    statusCode: number;
}
