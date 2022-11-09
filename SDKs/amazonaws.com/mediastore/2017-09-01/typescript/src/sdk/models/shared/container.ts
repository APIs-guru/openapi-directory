import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerStatusEnum } from "./containerstatusenum";


// Container
/** 
 * This section describes operations that you can perform on an AWS Elemental MediaStore container.
**/
export class Container extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=AccessLoggingEnabled" })
  accessLoggingEnabled?: boolean;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ContainerStatusEnum;
}
