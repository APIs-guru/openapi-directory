import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the network interface attachment.
**/
export declare class AwsEc2NetworkInterfaceAttachment extends SpeakeasyBase {
    attachTime?: string;
    attachmentId?: string;
    deleteOnTermination?: boolean;
    deviceIndex?: number;
    instanceId?: string;
    instanceOwnerId?: string;
    status?: string;
}
