import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";
/**
 * The configuration and status for a single subnet that you've specified for use by the AWS Network Firewall firewall. This is part of the <a>FirewallStatus</a>.
**/
export declare class Attachment extends SpeakeasyBase {
    endpointId?: string;
    status?: AttachmentStatusEnum;
    subnetId?: string;
}
