import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeAccountAssignmentCreationStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountAssignmentCreationRequestId" })
  accountAssignmentCreationRequestId: string;

  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;
}
