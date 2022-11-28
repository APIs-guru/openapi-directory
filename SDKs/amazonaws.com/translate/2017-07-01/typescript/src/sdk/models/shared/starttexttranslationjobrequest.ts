import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";



export class StartTextTranslationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig" })
  inputDataConfig: InputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=ParallelDataNames" })
  parallelDataNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=SourceLanguageCode" })
  sourceLanguageCode: string;

  @SpeakeasyMetadata({ data: "json, name=TargetLanguageCodes" })
  targetLanguageCodes: string[];

  @SpeakeasyMetadata({ data: "json, name=TerminologyNames" })
  terminologyNames?: string[];
}
