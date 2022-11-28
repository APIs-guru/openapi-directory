import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedConcurrencyConfigListItem } from "./provisionedconcurrencyconfiglistitem";



export class ListProvisionedConcurrencyConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedConcurrencyConfigs", elemType: ProvisionedConcurrencyConfigListItem })
  provisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[];
}
