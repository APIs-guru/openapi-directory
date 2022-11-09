import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountAssignmentOperationStatusMetadata } from "./accountassignmentoperationstatusmetadata";


export class ListAccountAssignmentCreationStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountAssignmentsCreationStatus", elemType: shared.AccountAssignmentOperationStatusMetadata })
  accountAssignmentsCreationStatus?: AccountAssignmentOperationStatusMetadata[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
