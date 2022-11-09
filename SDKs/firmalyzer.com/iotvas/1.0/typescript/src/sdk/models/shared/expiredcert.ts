import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicKey } from "./publickey";


export class ExpiredCert extends SpeakeasyBase {
  @Metadata({ data: "json, name=file_hash" })
  fileHash?: string;

  @Metadata({ data: "json, name=file_name" })
  fileName?: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey?: PublicKey;

  @Metadata({ data: "json, name=subject_name" })
  subjectName?: string;

  @Metadata({ data: "json, name=thumb_print" })
  thumbPrint?: string;

  @Metadata({ data: "json, name=valid_from" })
  validFrom?: string;

  @Metadata({ data: "json, name=valid_to" })
  validTo?: string;
}
