import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";
import { ParallelDataConfig } from "./paralleldataconfig";



// ParallelDataProperties
/** 
 * The properties of a parallel data resource.
**/
export class ParallelDataProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: EncryptionKey;

  @SpeakeasyMetadata({ data: "json, name=FailedRecordCount" })
  failedRecordCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ImportedDataSize" })
  importedDataSize?: number;

  @SpeakeasyMetadata({ data: "json, name=ImportedRecordCount" })
  importedRecordCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=LatestUpdateAttemptAt" })
  latestUpdateAttemptAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=LatestUpdateAttemptStatus" })
  latestUpdateAttemptStatus?: ParallelDataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ParallelDataConfig" })
  parallelDataConfig?: ParallelDataConfig;

  @SpeakeasyMetadata({ data: "json, name=SkippedRecordCount" })
  skippedRecordCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ParallelDataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetLanguageCodes" })
  targetLanguageCodes?: string[];
}
