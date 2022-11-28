import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAssignmentOperationStatus } from "./accountassignmentoperationstatus";



export class DeleteAccountAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountAssignmentDeletionStatus" })
  accountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
}
