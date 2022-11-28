import { SpeakeasyBase } from "../../../internal/utils";
import { TestingData } from "./testingdata";
import { ValidationData } from "./validationdata";
/**
 * Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
**/
export declare class TestingDataResult extends SpeakeasyBase {
    input?: TestingData;
    output?: TestingData;
    validation?: ValidationData;
}
