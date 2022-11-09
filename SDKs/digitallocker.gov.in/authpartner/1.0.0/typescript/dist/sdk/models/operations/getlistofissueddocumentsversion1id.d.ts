import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetListOfIssuedDocumentsVersion1IdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetListOfIssuedDocumentsVersion1IdRequest extends SpeakeasyBase {
    security: GetListOfIssuedDocumentsVersion1IdSecurity;
}
export declare class GetListOfIssuedDocumentsVersion1Id401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfIssuedDocumentsVersion1IdResponse extends SpeakeasyBase {
    contentType: string;
    getListOfIssuedDocumentsVersion1Id401ApplicationJsonObject?: GetListOfIssuedDocumentsVersion1Id401ApplicationJson;
    getListOfIssuedDocumentsVersion1Id500ApplicationJsonOneOf?: any;
    sample?: any;
    statusCode: number;
}
