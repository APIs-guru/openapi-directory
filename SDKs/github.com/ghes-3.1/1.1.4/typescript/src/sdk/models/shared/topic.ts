import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Topic
/** 
 * A topic aggregates entities that are related to a subject.
**/
export class Topic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names: string[];
}
