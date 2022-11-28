import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An attachment to an Amazon EC2 volume.
**/
export declare class AwsEc2VolumeAttachment extends SpeakeasyBase {
    attachTime?: string;
    deleteOnTermination?: boolean;
    instanceId?: string;
    status?: string;
}
