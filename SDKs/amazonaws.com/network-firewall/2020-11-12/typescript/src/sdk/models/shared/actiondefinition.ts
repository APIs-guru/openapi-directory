import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublishMetricAction } from "./publishmetricaction";


// ActionDefinition
/** 
 * A custom action to use in stateless rule actions settings. This is used in <a>CustomAction</a>.
**/
export class ActionDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=PublishMetricAction" })
  publishMetricAction?: PublishMetricAction;
}
