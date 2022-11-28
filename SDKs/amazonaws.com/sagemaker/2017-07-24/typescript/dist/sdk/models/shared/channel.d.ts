import { SpeakeasyBase } from "../../../internal/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { DataSource } from "./datasource";
import { TrainingInputModeEnum } from "./traininginputmodeenum";
import { RecordWrapperEnum } from "./recordwrapperenum";
import { ShuffleConfig } from "./shuffleconfig";
/**
 * A channel is a named input source that training algorithms can consume.
**/
export declare class Channel extends SpeakeasyBase {
    channelName: string;
    compressionType?: CompressionTypeEnum;
    contentType?: string;
    dataSource: DataSource;
    inputMode?: TrainingInputModeEnum;
    recordWrapperType?: RecordWrapperEnum;
    shuffleConfig?: ShuffleConfig;
}
