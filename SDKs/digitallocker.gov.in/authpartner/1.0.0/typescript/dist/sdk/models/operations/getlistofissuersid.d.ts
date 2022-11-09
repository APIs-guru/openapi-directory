import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetListOfIssuersIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class GetListOfIssuersIdRequest extends SpeakeasyBase {
    request?: any;
    security: GetListOfIssuersIdSecurity;
}
export declare class GetListOfIssuersId400ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfIssuersId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfIssuersId500ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class GetListOfIssuersIdResponse extends SpeakeasyBase {
    contentType: string;
    getListOfIssuersId400ApplicationJsonObject?: GetListOfIssuersId400ApplicationJson;
    getListOfIssuersId401ApplicationJsonObject?: GetListOfIssuersId401ApplicationJson;
    getListOfIssuersId500ApplicationJsonObject?: GetListOfIssuersId500ApplicationJson;
    issuerResponse?: shared.IssuerResponse;
    statusCode: number;
}
