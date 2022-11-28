import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImportedKeyMaterialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;
}
