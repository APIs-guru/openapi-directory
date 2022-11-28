import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentStatusEnum } from "./attachmentstatusenum";



// EbsInstanceBlockDevice
/** 
 * Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume in a block device mapping.
**/
export class EbsInstanceBlockDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachTime" })
  attachTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleteOnTermination" })
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AttachmentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
