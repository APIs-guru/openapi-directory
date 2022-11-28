import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEndpointInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName: string;
}
