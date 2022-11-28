import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServicePower } from "./containerservicepower";



export class GetContainerServicePowersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=powers", elemType: ContainerServicePower })
  powers?: ContainerServicePower[];
}
