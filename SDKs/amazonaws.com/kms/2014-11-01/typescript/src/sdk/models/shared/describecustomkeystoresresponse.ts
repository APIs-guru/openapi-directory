import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomKeyStoresListEntry } from "./customkeystoreslistentry";



export class DescribeCustomKeyStoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomKeyStores", elemType: CustomKeyStoresListEntry })
  customKeyStores?: CustomKeyStoresListEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
