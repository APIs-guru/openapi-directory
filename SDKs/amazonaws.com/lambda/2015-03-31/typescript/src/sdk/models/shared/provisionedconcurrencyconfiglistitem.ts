import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedConcurrencyStatusEnumEnum } from "./provisionedconcurrencystatusenumenum";



// ProvisionedConcurrencyConfigListItem
/** 
 * Details about the provisioned concurrency configuration for a function alias or version.
**/
export class ProvisionedConcurrencyConfigListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedProvisionedConcurrentExecutions" })
  allocatedProvisionedConcurrentExecutions?: number;

  @SpeakeasyMetadata({ data: "json, name=AvailableProvisionedConcurrentExecutions" })
  availableProvisionedConcurrentExecutions?: number;

  @SpeakeasyMetadata({ data: "json, name=FunctionArn" })
  functionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestedProvisionedConcurrentExecutions" })
  requestedProvisionedConcurrentExecutions?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProvisionedConcurrencyStatusEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: string;
}
