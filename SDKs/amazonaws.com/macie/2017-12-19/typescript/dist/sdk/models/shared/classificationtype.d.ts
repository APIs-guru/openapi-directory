import { SpeakeasyBase } from "../../../internal/utils";
import { S3ContinuousClassificationTypeEnum } from "./s3continuousclassificationtypeenum";
import { S3OneTimeClassificationTypeEnum } from "./s3onetimeclassificationtypeenum";
/**
 * The classification type that Amazon Macie Classic applies to the associated S3 resources.
**/
export declare class ClassificationType extends SpeakeasyBase {
    continuous: S3ContinuousClassificationTypeEnum;
    oneTime: S3OneTimeClassificationTypeEnum;
}
