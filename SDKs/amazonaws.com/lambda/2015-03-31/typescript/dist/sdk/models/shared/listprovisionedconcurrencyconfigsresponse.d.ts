import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionedConcurrencyConfigListItem } from "./provisionedconcurrencyconfiglistitem";
export declare class ListProvisionedConcurrencyConfigsResponse extends SpeakeasyBase {
    nextMarker?: string;
    provisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[];
}
