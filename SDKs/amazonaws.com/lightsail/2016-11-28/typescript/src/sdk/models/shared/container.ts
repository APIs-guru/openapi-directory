import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceProtocolEnum } from "./containerserviceprotocolenum";



// Container
/** 
 * Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.
**/
export class Container extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports?: Map<string, ContainerServiceProtocolEnum>;
}
