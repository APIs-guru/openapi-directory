import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";
import { TestingData } from "./testingdata";
import { TrainingData } from "./trainingdata";



export class CreateProjectVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputConfig" })
  outputConfig: OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=ProjectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=TestingData" })
  testingData: TestingData;

  @SpeakeasyMetadata({ data: "json, name=TrainingData" })
  trainingData: TrainingData;

  @SpeakeasyMetadata({ data: "json, name=VersionName" })
  versionName: string;
}
