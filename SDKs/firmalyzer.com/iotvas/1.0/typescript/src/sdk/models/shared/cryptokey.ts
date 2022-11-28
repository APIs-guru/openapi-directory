import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CryptoKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=bits" })
  bits?: number;

  @SpeakeasyMetadata({ data: "json, name=file_hash" })
  fileHash?: string;

  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=pem_type" })
  pemType?: string;
}
