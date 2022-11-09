import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsManagedHumanLoopRequestSourceEnum } from "./awsmanagedhumanlooprequestsourceenum";


// HumanLoopRequestSource
/** 
 * Container for configuring the source of human task requests.
**/
export class HumanLoopRequestSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsManagedHumanLoopRequestSource" })
  awsManagedHumanLoopRequestSource: AwsManagedHumanLoopRequestSourceEnum;
}
