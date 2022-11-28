import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the status of changes to HSM settings.
**/
export declare class HsmStatus extends SpeakeasyBase {
    hsmClientCertificateIdentifier?: string;
    hsmConfigurationIdentifier?: string;
    status?: string;
}
