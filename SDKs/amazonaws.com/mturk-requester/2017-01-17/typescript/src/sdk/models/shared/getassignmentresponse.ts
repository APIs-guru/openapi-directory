import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
import { Hit } from "./hit";



export class GetAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Assignment" })
  assignment?: Assignment;

  @SpeakeasyMetadata({ data: "json, name=HIT" })
  hit?: Hit;
}
