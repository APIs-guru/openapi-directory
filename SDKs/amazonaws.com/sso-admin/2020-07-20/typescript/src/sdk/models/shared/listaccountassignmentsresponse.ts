import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountAssignment } from "./accountassignment";


export class ListAccountAssignmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountAssignments", elemType: shared.AccountAssignment })
  accountAssignments?: AccountAssignment[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
