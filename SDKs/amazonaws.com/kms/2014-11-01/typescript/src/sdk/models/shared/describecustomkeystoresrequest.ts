import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCustomKeyStoresRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;

  @Metadata({ data: "json, name=CustomKeyStoreName" })
  customKeyStoreName?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
