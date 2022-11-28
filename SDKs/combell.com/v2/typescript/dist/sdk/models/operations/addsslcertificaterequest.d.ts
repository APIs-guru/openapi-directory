import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddSslCertificateRequestRequest extends SpeakeasyBase {
    request?: shared.CreateSslCertificateRequest;
}
export declare class AddSslCertificateRequestResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
