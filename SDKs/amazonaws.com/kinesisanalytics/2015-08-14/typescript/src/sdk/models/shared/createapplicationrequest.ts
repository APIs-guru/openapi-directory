import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLoggingOption } from "./cloudwatchloggingoption";
import { Input } from "./input";
import { Output } from "./output";
import { Tag } from "./tag";



// CreateApplicationRequest
/** 
 * TBD
**/
export class CreateApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationCode" })
  applicationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationDescription" })
  applicationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptions", elemType: CloudWatchLoggingOption })
  cloudWatchLoggingOptions?: CloudWatchLoggingOption[];

  @SpeakeasyMetadata({ data: "json, name=Inputs", elemType: Input })
  inputs?: Input[];

  @SpeakeasyMetadata({ data: "json, name=Outputs", elemType: Output })
  outputs?: Output[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
