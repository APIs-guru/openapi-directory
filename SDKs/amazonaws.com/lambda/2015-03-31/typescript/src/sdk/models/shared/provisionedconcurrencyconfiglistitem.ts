import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedConcurrencyStatusEnumEnum } from "./provisionedconcurrencystatusenumenum";


// ProvisionedConcurrencyConfigListItem
/** 
 * Details about the provisioned concurrency configuration for a function alias or version.
**/
export class ProvisionedConcurrencyConfigListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocatedProvisionedConcurrentExecutions" })
  allocatedProvisionedConcurrentExecutions?: number;

  @Metadata({ data: "json, name=AvailableProvisionedConcurrentExecutions" })
  availableProvisionedConcurrentExecutions?: number;

  @Metadata({ data: "json, name=FunctionArn" })
  functionArn?: string;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: string;

  @Metadata({ data: "json, name=RequestedProvisionedConcurrentExecutions" })
  requestedProvisionedConcurrentExecutions?: number;

  @Metadata({ data: "json, name=Status" })
  status?: ProvisionedConcurrencyStatusEnumEnum;

  @Metadata({ data: "json, name=StatusReason" })
  statusReason?: string;
}
