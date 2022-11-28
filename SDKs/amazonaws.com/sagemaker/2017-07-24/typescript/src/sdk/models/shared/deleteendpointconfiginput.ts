import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEndpointConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointConfigName" })
  endpointConfigName: string;
}
