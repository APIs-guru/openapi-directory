import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenerateRandomRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;

  @Metadata({ data: "json, name=NumberOfBytes" })
  numberOfBytes?: number;
}
