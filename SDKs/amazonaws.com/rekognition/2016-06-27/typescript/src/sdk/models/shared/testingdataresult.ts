import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestingData } from "./testingdata";
import { ValidationData } from "./validationdata";



// TestingDataResult
/** 
 * Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
**/
export class TestingDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Input" })
  input?: TestingData;

  @SpeakeasyMetadata({ data: "json, name=Output" })
  output?: TestingData;

  @SpeakeasyMetadata({ data: "json, name=Validation" })
  validation?: ValidationData;
}
