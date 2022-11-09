import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2VpnConnectionVgwTelemetryDetails
/** 
 * Information about the VPN tunnel.
**/
export class AwsEc2VpnConnectionVgwTelemetryDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptedRouteCount" })
  acceptedRouteCount?: number;

  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=LastStatusChange" })
  lastStatusChange?: string;

  @Metadata({ data: "json, name=OutsideIpAddress" })
  outsideIpAddress?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
