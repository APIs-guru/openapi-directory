import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssignInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=LayerIds" })
  layerIds: string[];
}
