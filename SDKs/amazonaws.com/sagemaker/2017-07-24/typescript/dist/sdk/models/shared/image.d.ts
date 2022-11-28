import { SpeakeasyBase } from "../../../internal/utils";
import { ImageStatusEnum } from "./imagestatusenum";
/**
 * A SageMaker image. A SageMaker image represents a set of container images that are derived from a common base container image. Each of these container images is represented by a SageMaker <code>ImageVersion</code>.
**/
export declare class Image extends SpeakeasyBase {
    creationTime: Date;
    description?: string;
    displayName?: string;
    failureReason?: string;
    imageArn: string;
    imageName: string;
    imageStatus: ImageStatusEnum;
    lastModifiedTime: Date;
}
