import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobDetails } from "./jobdetails";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";


// TextTranslationJobProperties
/** 
 * Provides information about a translation job.
**/
export class TextTranslationJobProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig?: InputDataConfig;

  @Metadata({ data: "json, name=JobDetails" })
  jobDetails?: JobDetails;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: OutputDataConfig;

  @Metadata({ data: "json, name=ParallelDataNames" })
  parallelDataNames?: string[];

  @Metadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode?: string;

  @Metadata({ data: "json, name=SubmittedTime" })
  submittedTime?: Date;

  @Metadata({ data: "json, name=TargetLanguageCodes" })
  targetLanguageCodes?: string[];

  @Metadata({ data: "json, name=TerminologyNames" })
  terminologyNames?: string[];
}
