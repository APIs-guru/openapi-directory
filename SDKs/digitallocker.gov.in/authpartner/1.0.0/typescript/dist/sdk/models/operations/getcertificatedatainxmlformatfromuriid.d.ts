import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCertificateDataInXmlFormatFromUriIdPathParams extends SpeakeasyBase {
    uri: string;
}
export declare class GetCertificateDataInXmlFormatFromUriIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetCertificateDataInXmlFormatFromUriIdRequest extends SpeakeasyBase {
    pathParams: GetCertificateDataInXmlFormatFromUriIdPathParams;
    security: GetCertificateDataInXmlFormatFromUriIdSecurity;
}
export declare class GetCertificateDataInXmlFormatFromUriId400ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetCertificateDataInXmlFormatFromUriId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetCertificateDataInXmlFormatFromUriId404ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetCertificateDataInXmlFormatFromUriIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getCertificateDataInXmlFormatFromUriId400ApplicationJsonObject?: GetCertificateDataInXmlFormatFromUriId400ApplicationJson;
    getCertificateDataInXmlFormatFromUriId401ApplicationJsonObject?: GetCertificateDataInXmlFormatFromUriId401ApplicationJson;
    getCertificateDataInXmlFormatFromUriId404ApplicationJsonObject?: GetCertificateDataInXmlFormatFromUriId404ApplicationJson;
    getCertificateDataInXmlFormatFromUriId500ApplicationJsonOneOf?: any;
    getCertificateDataInXmlFormatFromUriId503ApplicationJsonOneOf?: any;
    statusCode: number;
}
