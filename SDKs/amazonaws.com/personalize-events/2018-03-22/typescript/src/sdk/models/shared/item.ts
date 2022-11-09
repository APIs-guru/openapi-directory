import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Item
/** 
 * Represents item metadata added to an Items dataset using the <code>PutItems</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>. 
**/
export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemId" })
  itemId: string;

  @Metadata({ data: "json, name=properties" })
  properties?: any;
}
