import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputConfig } from "./outputconfig";
import { TestingData } from "./testingdata";
import { TrainingData } from "./trainingdata";


export class CreateProjectVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=OutputConfig" })
  outputConfig: OutputConfig;

  @Metadata({ data: "json, name=ProjectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=TestingData" })
  testingData: TestingData;

  @Metadata({ data: "json, name=TrainingData" })
  trainingData: TrainingData;

  @Metadata({ data: "json, name=VersionName" })
  versionName: string;
}
