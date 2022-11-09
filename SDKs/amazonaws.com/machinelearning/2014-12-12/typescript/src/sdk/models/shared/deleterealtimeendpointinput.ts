import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealtimeEndpointInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=MLModelId" })
  mlModelId: string;
}
