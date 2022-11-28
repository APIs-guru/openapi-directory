import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsManagedHumanLoopRequestSourceEnum } from "./awsmanagedhumanlooprequestsourceenum";



// HumanLoopRequestSource
/** 
 * Container for configuring the source of human task requests.
**/
export class HumanLoopRequestSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsManagedHumanLoopRequestSource" })
  awsManagedHumanLoopRequestSource: AwsManagedHumanLoopRequestSourceEnum;
}
