import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileSystemConfig
/** 
 * Details about the connection between a Lambda function and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.
**/
export class FileSystemConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=LocalMountPath" })
  localMountPath: string;
}
