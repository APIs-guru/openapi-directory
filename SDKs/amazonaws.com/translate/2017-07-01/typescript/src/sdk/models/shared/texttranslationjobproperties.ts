import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobDetails } from "./jobdetails";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";



// TextTranslationJobProperties
/** 
 * Provides information about a translation job.
**/
export class TextTranslationJobProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=JobDetails" })
  jobDetails?: JobDetails;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: OutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=ParallelDataNames" })
  parallelDataNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=SubmittedTime" })
  submittedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TargetLanguageCodes" })
  targetLanguageCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=TerminologyNames" })
  terminologyNames?: string[];
}
