import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about whether an Amazon Redshift cluster finished applying any hardware changes to security module (HSM) settings that were specified in a modify cluster command.
**/
export declare class AwsRedshiftClusterHsmStatus extends SpeakeasyBase {
    hsmClientCertificateIdentifier?: string;
    hsmConfigurationIdentifier?: string;
    status?: string;
}
