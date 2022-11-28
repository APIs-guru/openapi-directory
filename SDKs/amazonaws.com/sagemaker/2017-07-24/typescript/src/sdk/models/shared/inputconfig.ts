import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FrameworkEnum } from "./frameworkenum";



// InputConfig
/** 
 * Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
**/
export class InputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataInputConfig" })
  dataInputConfig: string;

  @SpeakeasyMetadata({ data: "json, name=Framework" })
  framework: FrameworkEnum;

  @SpeakeasyMetadata({ data: "json, name=FrameworkVersion" })
  frameworkVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
