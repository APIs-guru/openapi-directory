import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAccountAssignmentDeletionStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountAssignmentDeletionRequestId" })
  accountAssignmentDeletionRequestId: string;

  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;
}
