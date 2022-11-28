import { SpeakeasyBase } from "../../../internal/utils";
import { AppInstanceTypeEnum } from "./appinstancetypeenum";
/**
 * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
**/
export declare class ResourceSpec extends SpeakeasyBase {
    instanceType?: AppInstanceTypeEnum;
    lifecycleConfigArn?: string;
    sageMakerImageArn?: string;
    sageMakerImageVersionArn?: string;
}
