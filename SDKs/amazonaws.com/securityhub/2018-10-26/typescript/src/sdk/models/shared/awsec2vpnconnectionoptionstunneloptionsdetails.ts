import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2VpnConnectionOptionsTunnelOptionsDetails
/** 
 * The VPN tunnel options.
**/
export class AwsEc2VpnConnectionOptionsTunnelOptionsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DpdTimeoutSeconds" })
  dpdTimeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=IkeVersions" })
  ikeVersions?: string[];

  @SpeakeasyMetadata({ data: "json, name=OutsideIpAddress" })
  outsideIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Phase1DhGroupNumbers" })
  phase1DhGroupNumbers?: number[];

  @SpeakeasyMetadata({ data: "json, name=Phase1EncryptionAlgorithms" })
  phase1EncryptionAlgorithms?: string[];

  @SpeakeasyMetadata({ data: "json, name=Phase1IntegrityAlgorithms" })
  phase1IntegrityAlgorithms?: string[];

  @SpeakeasyMetadata({ data: "json, name=Phase1LifetimeSeconds" })
  phase1LifetimeSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Phase2DhGroupNumbers" })
  phase2DhGroupNumbers?: number[];

  @SpeakeasyMetadata({ data: "json, name=Phase2EncryptionAlgorithms" })
  phase2EncryptionAlgorithms?: string[];

  @SpeakeasyMetadata({ data: "json, name=Phase2IntegrityAlgorithms" })
  phase2IntegrityAlgorithms?: string[];

  @SpeakeasyMetadata({ data: "json, name=Phase2LifetimeSeconds" })
  phase2LifetimeSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=PreSharedKey" })
  preSharedKey?: string;

  @SpeakeasyMetadata({ data: "json, name=RekeyFuzzPercentage" })
  rekeyFuzzPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=RekeyMarginTimeSeconds" })
  rekeyMarginTimeSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=ReplayWindowSize" })
  replayWindowSize?: number;

  @SpeakeasyMetadata({ data: "json, name=TunnelInsideCidr" })
  tunnelInsideCidr?: string;
}
