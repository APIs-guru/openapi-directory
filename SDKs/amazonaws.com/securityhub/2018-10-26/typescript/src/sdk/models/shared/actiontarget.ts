import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionTarget
/** 
 * An <code>ActionTarget</code> object.
**/
export class ActionTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionTargetArn" })
  actionTargetArn: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
