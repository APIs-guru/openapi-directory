import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents item metadata added to an Items dataset using the <code>PutItems</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>.
**/
export declare class Item extends SpeakeasyBase {
    itemId: string;
    properties?: any;
}
