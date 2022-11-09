import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PullDocumentIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PullDocumentIdRequest extends SpeakeasyBase {
    request?: any;
    security: PullDocumentIdSecurity;
}
export declare class PullDocumentId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class PullDocumentId404ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class PullDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    pullDocumentId400ApplicationJsonOneOf?: any;
    pullDocumentId401ApplicationJsonObject?: PullDocumentId401ApplicationJson;
    pullDocumentId404ApplicationJsonObject?: PullDocumentId404ApplicationJson;
    pullDocumentId500ApplicationJsonOneOf?: any;
    sample?: any;
    statusCode: number;
}
