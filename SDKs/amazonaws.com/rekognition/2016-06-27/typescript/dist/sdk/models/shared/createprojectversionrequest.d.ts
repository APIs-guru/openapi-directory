import { SpeakeasyBase } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";
import { TestingData } from "./testingdata";
import { TrainingData } from "./trainingdata";
export declare class CreateProjectVersionRequest extends SpeakeasyBase {
    kmsKeyId?: string;
    outputConfig: OutputConfig;
    projectArn: string;
    tags?: Map<string, string>;
    testingData: TestingData;
    trainingData: TrainingData;
    versionName: string;
}
