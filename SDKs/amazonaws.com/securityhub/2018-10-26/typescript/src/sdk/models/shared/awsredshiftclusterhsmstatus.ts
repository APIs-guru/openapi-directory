import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterHsmStatus
/** 
 * Information about whether an Amazon Redshift cluster finished applying any hardware changes to security module (HSM) settings that were specified in a modify cluster command.
**/
export class AwsRedshiftClusterHsmStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HsmClientCertificateIdentifier" })
  hsmClientCertificateIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=HsmConfigurationIdentifier" })
  hsmConfigurationIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
