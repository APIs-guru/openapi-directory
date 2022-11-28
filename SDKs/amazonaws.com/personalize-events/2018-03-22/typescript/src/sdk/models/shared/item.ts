import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Item
/** 
 * Represents item metadata added to an Items dataset using the <code>PutItems</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
**/
export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: any;
}
