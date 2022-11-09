import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLayerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LayerId" })
  layerId: string;
}
