import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateRealtimeEndpointInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MLModelId" })
  mlModelId: string;
}
