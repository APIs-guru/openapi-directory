import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PredictedItem
/** 
 * <p>An object that identifies an item.</p> <p>The and APIs return a list of <code>PredictedItem</code>s.</p>
**/
export class PredictedItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
