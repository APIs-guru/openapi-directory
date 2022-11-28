import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAssignmentOperationStatus } from "./accountassignmentoperationstatus";



export class CreateAccountAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountAssignmentCreationStatus" })
  accountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
}
