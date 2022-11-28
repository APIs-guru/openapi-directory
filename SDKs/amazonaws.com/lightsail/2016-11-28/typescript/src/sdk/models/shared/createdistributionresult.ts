import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LightsailDistribution } from "./lightsaildistribution";
import { Operation } from "./operation";



export class CreateDistributionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: LightsailDistribution;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;
}
