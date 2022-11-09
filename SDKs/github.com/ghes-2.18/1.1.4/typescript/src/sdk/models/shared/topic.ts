import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Topic
/** 
 * A topic aggregates entities that are related to a subject.
**/
export class Topic extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names: string[];
}
