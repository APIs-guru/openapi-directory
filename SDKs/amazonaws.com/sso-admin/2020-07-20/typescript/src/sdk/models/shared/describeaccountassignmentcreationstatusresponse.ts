import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountAssignmentOperationStatus } from "./accountassignmentoperationstatus";


export class DescribeAccountAssignmentCreationStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountAssignmentCreationStatus" })
  accountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
}
