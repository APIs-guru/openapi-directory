import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { JobDetails } from "./jobdetails";
import { JobStatusEnum } from "./jobstatusenum";
import { OutputDataConfig } from "./outputdataconfig";
/**
 * Provides information about a translation job.
**/
export declare class TextTranslationJobProperties extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    endTime?: Date;
    inputDataConfig?: InputDataConfig;
    jobDetails?: JobDetails;
    jobId?: string;
    jobName?: string;
    jobStatus?: JobStatusEnum;
    message?: string;
    outputDataConfig?: OutputDataConfig;
    parallelDataNames?: string[];
    sourceLanguageCode?: string;
    submittedTime?: Date;
    targetLanguageCodes?: string[];
    terminologyNames?: string[];
}
