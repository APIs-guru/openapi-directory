import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAssignmentOperationStatusMetadata } from "./accountassignmentoperationstatusmetadata";



export class ListAccountAssignmentCreationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountAssignmentsCreationStatus", elemType: AccountAssignmentOperationStatusMetadata })
  accountAssignmentsCreationStatus?: AccountAssignmentOperationStatusMetadata[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
