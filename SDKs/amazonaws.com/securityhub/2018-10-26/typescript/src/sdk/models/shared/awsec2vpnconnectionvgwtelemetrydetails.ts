import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2VpnConnectionVgwTelemetryDetails
/** 
 * Information about the VPN tunnel.
**/
export class AwsEc2VpnConnectionVgwTelemetryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptedRouteCount" })
  acceptedRouteCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastStatusChange" })
  lastStatusChange?: string;

  @SpeakeasyMetadata({ data: "json, name=OutsideIpAddress" })
  outsideIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
