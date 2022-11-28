import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedConcurrencyStatusEnumEnum } from "./provisionedconcurrencystatusenumenum";



export class GetProvisionedConcurrencyConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocatedProvisionedConcurrentExecutions" })
  allocatedProvisionedConcurrentExecutions?: number;

  @SpeakeasyMetadata({ data: "json, name=AvailableProvisionedConcurrentExecutions" })
  availableProvisionedConcurrentExecutions?: number;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestedProvisionedConcurrentExecutions" })
  requestedProvisionedConcurrentExecutions?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProvisionedConcurrencyStatusEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: string;
}
