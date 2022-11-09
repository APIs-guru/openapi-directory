import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DesiredWeightAndCapacity } from "./desiredweightandcapacity";


export class UpdateEndpointWeightsAndCapacitiesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DesiredWeightsAndCapacities", elemType: shared.DesiredWeightAndCapacity })
  desiredWeightsAndCapacities: DesiredWeightAndCapacity[];

  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;
}
