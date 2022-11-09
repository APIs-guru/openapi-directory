import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterHsmStatus
/** 
 * Information about whether an Amazon Redshift cluster finished applying any hardware changes to security module (HSM) settings that were specified in a modify cluster command.
**/
export class AwsRedshiftClusterHsmStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=HsmClientCertificateIdentifier" })
  hsmClientCertificateIdentifier?: string;

  @Metadata({ data: "json, name=HsmConfigurationIdentifier" })
  hsmConfigurationIdentifier?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
