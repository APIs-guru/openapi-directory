import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


// ControlPanel
/** 
 * A control panel represents a group of routing controls that can be changed together in a single transaction.
**/
export class ControlPanel extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @Metadata({ data: "json, name=ControlPanelArn" })
  controlPanelArn?: string;

  @Metadata({ data: "json, name=DefaultControlPanel" })
  defaultControlPanel?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=RoutingControlCount" })
  routingControlCount?: number;

  @Metadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
