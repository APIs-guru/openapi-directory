import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicKey } from "./publickey";



export class ExpiredCert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_hash" })
  fileHash?: string;

  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: PublicKey;

  @SpeakeasyMetadata({ data: "json, name=subject_name" })
  subjectName?: string;

  @SpeakeasyMetadata({ data: "json, name=thumb_print" })
  thumbPrint?: string;

  @SpeakeasyMetadata({ data: "json, name=valid_from" })
  validFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=valid_to" })
  validTo?: string;
}
