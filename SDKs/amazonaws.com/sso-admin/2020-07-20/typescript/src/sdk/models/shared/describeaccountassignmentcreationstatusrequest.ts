import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAccountAssignmentCreationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountAssignmentCreationRequestId" })
  accountAssignmentCreationRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;
}
