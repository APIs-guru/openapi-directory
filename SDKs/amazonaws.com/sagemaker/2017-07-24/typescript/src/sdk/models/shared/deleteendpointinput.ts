import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEndpointInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndpointName" })
  endpointName: string;
}
