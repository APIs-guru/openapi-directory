import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudWatchLoggingOption } from "./cloudwatchloggingoption";
import { Input } from "./input";
import { Output } from "./output";
import { Tag } from "./tag";


// CreateApplicationRequest
/** 
 * TBD
**/
export class CreateApplicationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationCode" })
  applicationCode?: string;

  @Metadata({ data: "json, name=ApplicationDescription" })
  applicationDescription?: string;

  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CloudWatchLoggingOptions", elemType: shared.CloudWatchLoggingOption })
  cloudWatchLoggingOptions?: CloudWatchLoggingOption[];

  @Metadata({ data: "json, name=Inputs", elemType: shared.Input })
  inputs?: Input[];

  @Metadata({ data: "json, name=Outputs", elemType: shared.Output })
  outputs?: Output[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
