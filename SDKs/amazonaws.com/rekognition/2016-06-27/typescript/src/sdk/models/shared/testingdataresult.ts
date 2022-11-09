import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestingData } from "./testingdata";
import { TestingData } from "./testingdata";
import { ValidationData } from "./validationdata";


// TestingDataResult
/** 
 * Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
**/
export class TestingDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Input" })
  input?: TestingData;

  @Metadata({ data: "json, name=Output" })
  output?: TestingData;

  @Metadata({ data: "json, name=Validation" })
  validation?: ValidationData;
}
