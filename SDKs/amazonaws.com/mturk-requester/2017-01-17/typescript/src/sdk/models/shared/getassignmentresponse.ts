import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Assignment } from "./assignment";
import { Hit } from "./hit";


export class GetAssignmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Assignment" })
  assignment?: Assignment;

  @Metadata({ data: "json, name=HIT" })
  hit?: Hit;
}
