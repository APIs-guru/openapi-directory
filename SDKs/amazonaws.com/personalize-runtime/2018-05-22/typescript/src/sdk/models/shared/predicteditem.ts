import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PredictedItem
/** 
 * <p>An object that identifies an item.</p> <p>The and APIs return a list of <code>PredictedItem</code>s.</p>
**/
export class PredictedItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
