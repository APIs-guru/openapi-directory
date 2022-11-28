import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRealtimeEndpointInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId: string;
}
