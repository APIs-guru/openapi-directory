import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountAssignmentOperationStatus } from "./accountassignmentoperationstatus";


export class DescribeAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountAssignmentDeletionStatus" })
  accountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
}
