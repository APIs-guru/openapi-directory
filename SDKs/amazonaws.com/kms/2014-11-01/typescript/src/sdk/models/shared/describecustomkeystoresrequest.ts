import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCustomKeyStoresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreName" })
  customKeyStoreName?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
