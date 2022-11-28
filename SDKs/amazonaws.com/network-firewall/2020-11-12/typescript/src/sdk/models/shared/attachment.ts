import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";



// Attachment
/** 
 * The configuration and status for a single subnet that you've specified for use by the AWS Network Firewall firewall. This is part of the <a>FirewallStatus</a>.
**/
export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointId" })
  endpointId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AttachmentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
