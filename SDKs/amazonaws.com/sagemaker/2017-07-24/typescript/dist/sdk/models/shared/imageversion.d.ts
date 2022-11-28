import { SpeakeasyBase } from "../../../internal/utils";
import { ImageVersionStatusEnum } from "./imageversionstatusenum";
/**
 * A version of a SageMaker <code>Image</code>. A version represents an existing container image.
**/
export declare class ImageVersion extends SpeakeasyBase {
    creationTime: Date;
    failureReason?: string;
    imageArn: string;
    imageVersionArn: string;
    imageVersionStatus: ImageVersionStatusEnum;
    lastModifiedTime: Date;
    version: number;
}
