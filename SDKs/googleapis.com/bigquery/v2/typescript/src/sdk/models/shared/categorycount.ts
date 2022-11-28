import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CategoryCount
/** 
 * Represents the count of a single category within the cluster.
**/
export class CategoryCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;
}
