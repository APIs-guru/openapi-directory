import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateRealtimeEndpointInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId: string;
}
