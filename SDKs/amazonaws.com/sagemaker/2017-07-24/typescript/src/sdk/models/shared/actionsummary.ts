import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionSource } from "./actionsource";
import { ActionStatusEnum } from "./actionstatusenum";


// ActionSummary
/** 
 * Lists the properties of an <i>action</i>. An action represents an action or activity. Some examples are a workflow step and a model deployment. Generally, an action involves at least one input artifact or output artifact.
**/
export class ActionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionArn" })
  actionArn?: string;

  @Metadata({ data: "json, name=ActionName" })
  actionName?: string;

  @Metadata({ data: "json, name=ActionType" })
  actionType?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Source" })
  source?: ActionSource;

  @Metadata({ data: "json, name=Status" })
  status?: ActionStatusEnum;
}
