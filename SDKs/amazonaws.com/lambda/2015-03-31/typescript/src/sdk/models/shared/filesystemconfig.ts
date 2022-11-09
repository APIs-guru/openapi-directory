import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileSystemConfig
/** 
 * Details about the connection between a Lambda function and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.
**/
export class FileSystemConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=LocalMountPath" })
  localMountPath: string;
}
