import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The VPN tunnel options.
**/
export declare class AwsEc2VpnConnectionOptionsTunnelOptionsDetails extends SpeakeasyBase {
    dpdTimeoutSeconds?: number;
    ikeVersions?: string[];
    outsideIpAddress?: string;
    phase1DhGroupNumbers?: number[];
    phase1EncryptionAlgorithms?: string[];
    phase1IntegrityAlgorithms?: string[];
    phase1LifetimeSeconds?: number;
    phase2DhGroupNumbers?: number[];
    phase2EncryptionAlgorithms?: string[];
    phase2IntegrityAlgorithms?: string[];
    phase2LifetimeSeconds?: number;
    preSharedKey?: string;
    rekeyFuzzPercentage?: number;
    rekeyMarginTimeSeconds?: number;
    replayWindowSize?: number;
    tunnelInsideCidr?: string;
}
