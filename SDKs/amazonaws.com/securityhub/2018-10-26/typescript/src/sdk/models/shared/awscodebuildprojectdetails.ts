import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCodeBuildProjectEnvironment } from "./awscodebuildprojectenvironment";
import { AwsCodeBuildProjectSource } from "./awscodebuildprojectsource";
import { AwsCodeBuildProjectVpcConfig } from "./awscodebuildprojectvpcconfig";



// AwsCodeBuildProjectDetails
/** 
 * Information about an CodeBuild project.
**/
export class AwsCodeBuildProjectDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: AwsCodeBuildProjectEnvironment;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: AwsCodeBuildProjectSource;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: AwsCodeBuildProjectVpcConfig;
}
