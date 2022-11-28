import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContainerServiceLogEvent
/** 
 * Describes the log events of a container of an Amazon Lightsail container service.
**/
export class ContainerServiceLogEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
