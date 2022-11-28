import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpInstanceSummary } from "./httpinstancesummary";



export class DiscoverInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Instances", elemType: HttpInstanceSummary })
  instances?: HttpInstanceSummary[];
}
