import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountAssignmentOperationStatusMetadata } from "./accountassignmentoperationstatusmetadata";


export class ListAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountAssignmentsDeletionStatus", elemType: shared.AccountAssignmentOperationStatusMetadata })
  accountAssignmentsDeletionStatus?: AccountAssignmentOperationStatusMetadata[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
