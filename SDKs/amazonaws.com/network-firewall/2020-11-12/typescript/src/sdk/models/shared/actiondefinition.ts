import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublishMetricAction } from "./publishmetricaction";



// ActionDefinition
/** 
 * A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>.
**/
export class ActionDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PublishMetricAction" })
  publishMetricAction?: PublishMetricAction;
}
