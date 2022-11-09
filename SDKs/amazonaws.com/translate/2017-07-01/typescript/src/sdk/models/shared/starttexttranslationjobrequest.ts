import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";


export class StartTextTranslationJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @Metadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: InputDataConfig;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @Metadata({ data: "json, name=ParallelDataNames" })
  parallelDataNames?: string[];

  @Metadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode: string;

  @Metadata({ data: "json, name=TargetLanguageCodes" })
  targetLanguageCodes: string[];

  @Metadata({ data: "json, name=TerminologyNames" })
  terminologyNames?: string[];
}
