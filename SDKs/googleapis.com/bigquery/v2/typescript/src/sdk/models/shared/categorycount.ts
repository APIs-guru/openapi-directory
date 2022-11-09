import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CategoryCount
/** 
 * Represents the count of a single category within the cluster.
**/
export class CategoryCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=count" })
  count?: string;
}
