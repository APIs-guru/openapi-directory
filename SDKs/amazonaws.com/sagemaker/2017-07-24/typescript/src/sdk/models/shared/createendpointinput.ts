import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateEndpointInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
