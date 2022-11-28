import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAssignmentOperationStatus } from "./accountassignmentoperationstatus";



export class DescribeAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountAssignmentDeletionStatus" })
  accountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
}
