import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";


// Attachment
/** 
 * The configuration and status for a single subnet that you've specified for use by the AWS Network Firewall firewall. This is part of the <a>FirewallStatus</a>.
**/
export class Attachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointId" })
  endpointId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: AttachmentStatusEnum;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;
}
