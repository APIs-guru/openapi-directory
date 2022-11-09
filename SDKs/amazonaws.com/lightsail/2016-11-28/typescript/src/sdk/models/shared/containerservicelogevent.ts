import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContainerServiceLogEvent
/** 
 * Describes the log events of a container of an Amazon Lightsail container service.
**/
export class ContainerServiceLogEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
