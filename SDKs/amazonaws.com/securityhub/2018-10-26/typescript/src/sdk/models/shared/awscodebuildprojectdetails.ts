import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsCodeBuildProjectEnvironment } from "./awscodebuildprojectenvironment";
import { AwsCodeBuildProjectSource } from "./awscodebuildprojectsource";
import { AwsCodeBuildProjectVpcConfig } from "./awscodebuildprojectvpcconfig";


// AwsCodeBuildProjectDetails
/** 
 * Information about an CodeBuild project.
**/
export class AwsCodeBuildProjectDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: string;

  @Metadata({ data: "json, name=Environment" })
  environment?: AwsCodeBuildProjectEnvironment;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=Source" })
  source?: AwsCodeBuildProjectSource;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: AwsCodeBuildProjectVpcConfig;
}
