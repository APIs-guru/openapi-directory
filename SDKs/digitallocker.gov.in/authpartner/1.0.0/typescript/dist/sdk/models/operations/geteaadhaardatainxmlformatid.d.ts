import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEAadhaarDataInXmlFormatIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetEAadhaarDataInXmlFormatIdRequest extends SpeakeasyBase {
    security: GetEAadhaarDataInXmlFormatIdSecurity;
}
export declare class GetEAadhaarDataInXmlFormatId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetEAadhaarDataInXmlFormatId404ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class GetEAadhaarDataInXmlFormatIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getEAadhaarDataInXmlFormatId401ApplicationJsonObject?: GetEAadhaarDataInXmlFormatId401ApplicationJson;
    getEAadhaarDataInXmlFormatId404ApplicationJsonObject?: GetEAadhaarDataInXmlFormatId404ApplicationJson;
    getEAadhaarDataInXmlFormatId500ApplicationJsonOneOf?: any;
    getEAadhaarDataInXmlFormatId503ApplicationJsonOneOf?: any;
    statusCode: number;
}
