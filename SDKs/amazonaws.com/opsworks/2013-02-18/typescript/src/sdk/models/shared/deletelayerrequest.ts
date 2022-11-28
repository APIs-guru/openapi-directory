import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LayerId" })
  layerId: string;
}
