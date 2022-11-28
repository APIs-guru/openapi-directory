import { SpeakeasyBase } from "../../../internal/utils";
import { TransformS3DataSource } from "./transforms3datasource";
/**
 * Describes the location of the channel data.
**/
export declare class TransformDataSource extends SpeakeasyBase {
    s3DataSource: TransformS3DataSource;
}
