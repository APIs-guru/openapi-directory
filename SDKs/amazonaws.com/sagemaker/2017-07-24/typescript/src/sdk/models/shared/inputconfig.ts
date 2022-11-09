import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FrameworkEnum } from "./frameworkenum";


// InputConfig
/** 
 * Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
**/
export class InputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataInputConfig" })
  dataInputConfig: string;

  @Metadata({ data: "json, name=Framework" })
  framework: FrameworkEnum;

  @Metadata({ data: "json, name=FrameworkVersion" })
  frameworkVersion?: string;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
