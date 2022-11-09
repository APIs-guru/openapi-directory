import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionKey } from "./encryptionkey";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";
import { ParallelDataConfig } from "./paralleldataconfig";
import { ParallelDataStatusEnum } from "./paralleldatastatusenum";


// ParallelDataProperties
/** 
 * The properties of a parallel data resource.
**/
export class ParallelDataProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: EncryptionKey;

  @Metadata({ data: "json, name=FailedRecordCount" })
  failedRecordCount?: number;

  @Metadata({ data: "json, name=ImportedDataSize" })
  importedDataSize?: number;

  @Metadata({ data: "json, name=ImportedRecordCount" })
  importedRecordCount?: number;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=LatestUpdateAttemptAt" })
  latestUpdateAttemptAt?: Date;

  @Metadata({ data: "json, name=LatestUpdateAttemptStatus" })
  latestUpdateAttemptStatus?: ParallelDataStatusEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ParallelDataConfig" })
  parallelDataConfig?: ParallelDataConfig;

  @Metadata({ data: "json, name=SkippedRecordCount" })
  skippedRecordCount?: number;

  @Metadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ParallelDataStatusEnum;

  @Metadata({ data: "json, name=TargetLanguageCodes" })
  targetLanguageCodes?: string[];
}
