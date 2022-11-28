import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceBucketAccessEnum } from "./resourcebucketaccessenum";
export declare class SetResourceAccessForBucketRequest extends SpeakeasyBase {
    access: ResourceBucketAccessEnum;
    bucketName: string;
    resourceName: string;
}
