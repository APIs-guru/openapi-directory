import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountAssignmentOperationStatus } from "./accountassignmentoperationstatus";


export class CreateAccountAssignmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountAssignmentCreationStatus" })
  accountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
}
