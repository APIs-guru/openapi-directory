import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAttachmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentId" })
  attachmentId: string;
}
