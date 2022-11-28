import { SpeakeasyBase } from "../../../internal/utils";
import { S3DataDistributionEnum } from "./s3datadistributionenum";
import { S3DataTypeEnum } from "./s3datatypeenum";
/**
 * Describes the S3 data source.
**/
export declare class S3DataSource extends SpeakeasyBase {
    attributeNames?: string[];
    s3DataDistributionType?: S3DataDistributionEnum;
    s3DataType: S3DataTypeEnum;
    s3Uri: string;
}
