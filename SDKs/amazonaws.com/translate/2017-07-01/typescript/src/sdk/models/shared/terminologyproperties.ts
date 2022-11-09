import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionKey } from "./encryptionkey";


// TerminologyProperties
/** 
 * The properties of the custom terminology.
**/
export class TerminologyProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: EncryptionKey;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SizeBytes" })
  sizeBytes?: number;

  @Metadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode?: string;

  @Metadata({ data: "json, name=TargetLanguageCodes" })
  targetLanguageCodes?: string[];

  @Metadata({ data: "json, name=TermCount" })
  termCount?: number;
}
