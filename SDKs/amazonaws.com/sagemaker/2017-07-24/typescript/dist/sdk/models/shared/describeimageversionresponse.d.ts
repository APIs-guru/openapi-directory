import { SpeakeasyBase } from "../../../internal/utils";
import { ImageVersionStatusEnum } from "./imageversionstatusenum";
export declare class DescribeImageVersionResponse extends SpeakeasyBase {
    baseImage?: string;
    containerImage?: string;
    creationTime?: Date;
    failureReason?: string;
    imageArn?: string;
    imageVersionArn?: string;
    imageVersionStatus?: ImageVersionStatusEnum;
    lastModifiedTime?: Date;
    version?: number;
}
