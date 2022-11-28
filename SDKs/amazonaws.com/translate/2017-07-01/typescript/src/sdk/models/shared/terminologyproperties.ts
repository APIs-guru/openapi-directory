import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";



// TerminologyProperties
/** 
 * The properties of the custom terminology.
**/
export class TerminologyProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: EncryptionKey;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SizeBytes" })
  sizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetLanguageCodes" })
  targetLanguageCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=TermCount" })
  termCount?: number;
}
