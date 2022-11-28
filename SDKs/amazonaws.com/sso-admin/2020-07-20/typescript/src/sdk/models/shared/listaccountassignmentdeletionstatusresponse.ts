import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAssignmentOperationStatusMetadata } from "./accountassignmentoperationstatusmetadata";



export class ListAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountAssignmentsDeletionStatus", elemType: AccountAssignmentOperationStatusMetadata })
  accountAssignmentsDeletionStatus?: AccountAssignmentOperationStatusMetadata[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
