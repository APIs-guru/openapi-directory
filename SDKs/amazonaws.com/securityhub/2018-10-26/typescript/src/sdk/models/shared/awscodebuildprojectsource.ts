import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCodeBuildProjectSource
/** 
 * Information about the build input source code for this build project.
**/
export class AwsCodeBuildProjectSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GitCloneDepth" })
  gitCloneDepth?: number;

  @SpeakeasyMetadata({ data: "json, name=InsecureSsl" })
  insecureSsl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
