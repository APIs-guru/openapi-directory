import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceError
/** 
 * Describes an AWS OpsWorks Stacks service error.
**/
export class ServiceError extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=ServiceErrorId" })
  serviceErrorId?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
