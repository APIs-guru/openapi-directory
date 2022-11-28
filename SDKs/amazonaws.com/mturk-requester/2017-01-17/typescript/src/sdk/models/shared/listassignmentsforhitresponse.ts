import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";



export class ListAssignmentsForHitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Assignments", elemType: Assignment })
  assignments?: Assignment[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NumResults" })
  numResults?: number;
}
