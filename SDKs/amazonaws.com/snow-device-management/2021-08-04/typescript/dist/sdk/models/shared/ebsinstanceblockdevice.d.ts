import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";
/**
 * Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume in a block device mapping.
**/
export declare class EbsInstanceBlockDevice extends SpeakeasyBase {
    attachTime?: Date;
    deleteOnTermination?: boolean;
    status?: AttachmentStatusEnum;
    volumeId?: string;
}
