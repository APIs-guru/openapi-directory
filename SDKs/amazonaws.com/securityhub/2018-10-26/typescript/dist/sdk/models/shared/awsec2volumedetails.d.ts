import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2VolumeAttachment } from "./awsec2volumeattachment";
/**
 * Details about an EC2 volume.
**/
export declare class AwsEc2VolumeDetails extends SpeakeasyBase {
    attachments?: AwsEc2VolumeAttachment[];
    createTime?: string;
    encrypted?: boolean;
    kmsKeyId?: string;
    size?: number;
    snapshotId?: string;
    status?: string;
}
