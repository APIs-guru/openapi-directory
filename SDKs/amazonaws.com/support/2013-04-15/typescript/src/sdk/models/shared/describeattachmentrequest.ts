import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId: string;
}
