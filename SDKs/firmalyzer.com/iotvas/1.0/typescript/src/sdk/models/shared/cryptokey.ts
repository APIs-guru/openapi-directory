import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CryptoKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @Metadata({ data: "json, name=bits" })
  bits?: number;

  @Metadata({ data: "json, name=file_hash" })
  fileHash?: string;

  @Metadata({ data: "json, name=file_name" })
  fileName?: string;

  @Metadata({ data: "json, name=pem_type" })
  pemType?: string;
}
