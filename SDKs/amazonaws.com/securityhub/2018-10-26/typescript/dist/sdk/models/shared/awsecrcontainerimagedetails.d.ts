import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an Amazon ECR image.
**/
export declare class AwsEcrContainerImageDetails extends SpeakeasyBase {
    architecture?: string;
    imageDigest?: string;
    imagePublishedAt?: string;
    imageTags?: string[];
    registryId?: string;
    repositoryName?: string;
}
