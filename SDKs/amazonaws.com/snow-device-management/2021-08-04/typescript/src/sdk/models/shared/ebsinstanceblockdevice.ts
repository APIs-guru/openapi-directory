import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";


// EbsInstanceBlockDevice
/** 
 * Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume in a block device mapping.
**/
export class EbsInstanceBlockDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachTime" })
  attachTime?: Date;

  @Metadata({ data: "json, name=deleteOnTermination" })
  deleteOnTermination?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: AttachmentStatusEnum;

  @Metadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
