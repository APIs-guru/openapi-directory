import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionSource } from "./actionsource";
import { ActionStatusEnum } from "./actionstatusenum";



// ActionSummary
/** 
 * Lists the properties of an <i>action</i>. An action represents an action or activity. Some examples are a workflow step and a model deployment. Generally, an action involves at least one input artifact or output artifact.
**/
export class ActionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionArn" })
  actionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ActionName" })
  actionName?: string;

  @SpeakeasyMetadata({ data: "json, name=ActionType" })
  actionType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: ActionSource;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ActionStatusEnum;
}
