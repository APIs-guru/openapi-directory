import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerStatusEnum } from "./containerstatusenum";



// Container
/** 
 * This section describes operations that you can perform on an AWS Elemental MediaStore container.
**/
export class Container extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=AccessLoggingEnabled" })
  accessLoggingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ContainerStatusEnum;
}
