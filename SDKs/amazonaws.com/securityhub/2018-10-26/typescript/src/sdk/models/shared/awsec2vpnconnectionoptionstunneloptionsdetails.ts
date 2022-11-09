import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2VpnConnectionOptionsTunnelOptionsDetails
/** 
 * The VPN tunnel options.
**/
export class AwsEc2VpnConnectionOptionsTunnelOptionsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DpdTimeoutSeconds" })
  dpdTimeoutSeconds?: number;

  @Metadata({ data: "json, name=IkeVersions" })
  ikeVersions?: string[];

  @Metadata({ data: "json, name=OutsideIpAddress" })
  outsideIpAddress?: string;

  @Metadata({ data: "json, name=Phase1DhGroupNumbers" })
  phase1DhGroupNumbers?: number[];

  @Metadata({ data: "json, name=Phase1EncryptionAlgorithms" })
  phase1EncryptionAlgorithms?: string[];

  @Metadata({ data: "json, name=Phase1IntegrityAlgorithms" })
  phase1IntegrityAlgorithms?: string[];

  @Metadata({ data: "json, name=Phase1LifetimeSeconds" })
  phase1LifetimeSeconds?: number;

  @Metadata({ data: "json, name=Phase2DhGroupNumbers" })
  phase2DhGroupNumbers?: number[];

  @Metadata({ data: "json, name=Phase2EncryptionAlgorithms" })
  phase2EncryptionAlgorithms?: string[];

  @Metadata({ data: "json, name=Phase2IntegrityAlgorithms" })
  phase2IntegrityAlgorithms?: string[];

  @Metadata({ data: "json, name=Phase2LifetimeSeconds" })
  phase2LifetimeSeconds?: number;

  @Metadata({ data: "json, name=PreSharedKey" })
  preSharedKey?: string;

  @Metadata({ data: "json, name=RekeyFuzzPercentage" })
  rekeyFuzzPercentage?: number;

  @Metadata({ data: "json, name=RekeyMarginTimeSeconds" })
  rekeyMarginTimeSeconds?: number;

  @Metadata({ data: "json, name=ReplayWindowSize" })
  replayWindowSize?: number;

  @Metadata({ data: "json, name=TunnelInsideCidr" })
  tunnelInsideCidr?: string;
}
