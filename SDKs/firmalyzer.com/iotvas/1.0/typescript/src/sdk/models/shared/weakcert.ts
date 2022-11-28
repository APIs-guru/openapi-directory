import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WeakCert extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_hash" })
  fileHash?: string;

  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=sign_algorithm" })
  signAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=subject_name" })
  subjectName?: string;

  @SpeakeasyMetadata({ data: "json, name=thumb_print" })
  thumbPrint?: string;

  @SpeakeasyMetadata({ data: "json, name=valid_from" })
  validFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=valid_to" })
  validTo?: string;
}
