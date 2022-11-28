import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



// ControlPanel
/** 
 * A control panel represents a group of routing controls that can be changed together in a single transaction.
**/
export class ControlPanel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ControlPanelArn" })
  controlPanelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultControlPanel" })
  defaultControlPanel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingControlCount" })
  routingControlCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusEnum;
}
