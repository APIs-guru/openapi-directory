import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthGetQueueCertificatesSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetQueueCertificatesRequest extends SpeakeasyBase {
    security: HealthGetQueueCertificatesSecurity;
}
export declare class HealthGetQueueCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
