import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Assignment } from "./assignment";


export class ListAssignmentsForHitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Assignments", elemType: shared.Assignment })
  assignments?: Assignment[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=NumResults" })
  numResults?: number;
}
