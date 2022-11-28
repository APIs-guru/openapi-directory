import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAccountAssignmentDeletionStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountAssignmentDeletionRequestId" })
  accountAssignmentDeletionRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;
}
