import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisionedConcurrencyConfigListItem } from "./provisionedconcurrencyconfiglistitem";


export class ListProvisionedConcurrencyConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=ProvisionedConcurrencyConfigs", elemType: shared.ProvisionedConcurrencyConfigListItem })
  provisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[];
}
