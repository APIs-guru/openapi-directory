import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateStatusEnum } from "./certificatestatusenum";
export declare class GetCertificatesRequest extends SpeakeasyBase {
    certificateName?: string;
    certificateStatuses?: CertificateStatusEnum[];
    includeCertificateDetails?: boolean;
}
