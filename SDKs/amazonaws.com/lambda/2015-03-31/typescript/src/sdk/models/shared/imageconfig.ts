import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageConfig
/** 
 * Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>. 
**/
export class ImageConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Command" })
  command?: string[];

  @Metadata({ data: "json, name=EntryPoint" })
  entryPoint?: string[];

  @Metadata({ data: "json, name=WorkingDirectory" })
  workingDirectory?: string;
}
