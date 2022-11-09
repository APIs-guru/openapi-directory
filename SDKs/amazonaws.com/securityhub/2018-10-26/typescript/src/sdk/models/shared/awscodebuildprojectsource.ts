import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCodeBuildProjectSource
/** 
 * Information about the build input source code for this build project.
**/
export class AwsCodeBuildProjectSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=GitCloneDepth" })
  gitCloneDepth?: number;

  @Metadata({ data: "json, name=InsecureSsl" })
  insecureSsl?: boolean;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
