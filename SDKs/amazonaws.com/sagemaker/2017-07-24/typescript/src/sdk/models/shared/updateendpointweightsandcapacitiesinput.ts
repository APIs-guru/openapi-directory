import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DesiredWeightAndCapacity } from "./desiredweightandcapacity";



export class UpdateEndpointWeightsAndCapacitiesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DesiredWeightsAndCapacities", elemType: DesiredWeightAndCapacity })
  desiredWeightsAndCapacities: DesiredWeightAndCapacity[];

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;
}
