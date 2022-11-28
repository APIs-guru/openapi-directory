import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageConfig
/** 
 * Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>. 
**/
export class ImageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=EntryPoint" })
  entryPoint?: string[];

  @SpeakeasyMetadata({ data: "json, name=WorkingDirectory" })
  workingDirectory?: string;
}
