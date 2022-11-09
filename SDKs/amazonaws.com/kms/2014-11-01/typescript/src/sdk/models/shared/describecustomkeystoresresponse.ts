import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomKeyStoresListEntry } from "./customkeystoreslistentry";


export class DescribeCustomKeyStoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomKeyStores", elemType: shared.CustomKeyStoresListEntry })
  customKeyStores?: CustomKeyStoresListEntry[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
