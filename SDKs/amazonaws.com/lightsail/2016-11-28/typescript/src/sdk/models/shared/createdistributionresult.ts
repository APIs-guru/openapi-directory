import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LightsailDistribution } from "./lightsaildistribution";
import { Operation } from "./operation";


export class CreateDistributionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=distribution" })
  distribution?: LightsailDistribution;

  @Metadata({ data: "json, name=operation" })
  operation?: Operation;
}
