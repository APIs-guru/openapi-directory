import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenerateRandomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" })
  customKeyStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfBytes" })
  numberOfBytes?: number;
}
