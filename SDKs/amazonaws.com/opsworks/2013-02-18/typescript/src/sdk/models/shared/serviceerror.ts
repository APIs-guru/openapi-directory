import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceError
/** 
 * Describes an AWS OpsWorks Stacks service error.
**/
export class ServiceError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceErrorId" })
  serviceErrorId?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
