import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMls3DataTypeEnum } from "./automls3datatypeenum";
/**
 * The Amazon S3 data source.
**/
export declare class AutoMls3DataSource extends SpeakeasyBase {
    s3DataType: AutoMls3DataTypeEnum;
    s3Uri: string;
}
