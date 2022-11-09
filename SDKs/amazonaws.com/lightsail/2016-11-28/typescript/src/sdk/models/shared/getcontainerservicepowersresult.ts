import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerServicePower } from "./containerservicepower";


export class GetContainerServicePowersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=powers", elemType: shared.ContainerServicePower })
  powers?: ContainerServicePower[];
}
