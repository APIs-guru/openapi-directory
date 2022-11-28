import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnomalyGroup } from "./anomalygroup";



export class GetAnomalyGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnomalyGroup" })
  anomalyGroup?: AnomalyGroup;
}
