import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Details about the connection between a Lambda function and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.
**/
export declare class FileSystemConfig extends SpeakeasyBase {
    arn: string;
    localMountPath: string;
}
