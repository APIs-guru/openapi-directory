import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionTarget
/** 
 * An <code>ActionTarget</code> object.
**/
export class ActionTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionTargetArn" })
  actionTargetArn: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
