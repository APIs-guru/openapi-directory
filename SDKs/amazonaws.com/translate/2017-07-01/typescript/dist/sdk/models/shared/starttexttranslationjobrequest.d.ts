import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";
export declare class StartTextTranslationJobRequest extends SpeakeasyBase {
    clientToken: string;
    dataAccessRoleArn: string;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    outputDataConfig: OutputDataConfig;
    parallelDataNames?: string[];
    sourceLanguageCode: string;
    targetLanguageCodes: string[];
    terminologyNames?: string[];
}
