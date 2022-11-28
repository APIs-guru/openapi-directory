import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAssignment } from "./accountassignment";



export class ListAccountAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountAssignments", elemType: AccountAssignment })
  accountAssignments?: AccountAssignment[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
