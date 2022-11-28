import { SpeakeasyBase } from "../../../internal/utils";
import { ImageStatusEnum } from "./imagestatusenum";
export declare class DescribeImageResponse extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    displayName?: string;
    failureReason?: string;
    imageArn?: string;
    imageName?: string;
    imageStatus?: ImageStatusEnum;
    lastModifiedTime?: Date;
    roleArn?: string;
}
