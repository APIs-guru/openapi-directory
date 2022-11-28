import { SpeakeasyBase } from "../../../internal/utils";
import { S3DataTypeEnum } from "./s3datatypeenum";
/**
 * Describes the S3 data source.
**/
export declare class TransformS3DataSource extends SpeakeasyBase {
    s3DataType: S3DataTypeEnum;
    s3Uri: string;
}
