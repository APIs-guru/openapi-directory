import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnomalyGroup } from "./anomalygroup";


export class GetAnomalyGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnomalyGroup" })
  anomalyGroup?: AnomalyGroup;
}
