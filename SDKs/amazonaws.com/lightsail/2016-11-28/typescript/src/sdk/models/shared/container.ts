import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerServiceProtocolEnum } from "./containerserviceprotocolenum";


// Container
/** 
 * Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.
**/
export class Container extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: string[];

  @Metadata({ data: "json, name=environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=ports" })
  ports?: Map<string, ContainerServiceProtocolEnum>;
}
