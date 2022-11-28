import { SpeakeasyBase } from "../../../internal/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { AutoMlDataSource } from "./automldatasource";
/**
 * A channel is a named input source that training algorithms can consume. For more information, see .
**/
export declare class AutoMlChannel extends SpeakeasyBase {
    compressionType?: CompressionTypeEnum;
    dataSource: AutoMlDataSource;
    targetAttributeName: string;
}
