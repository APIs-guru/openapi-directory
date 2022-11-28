import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingS3CompressionTypeEnum } from "./processings3compressiontypeenum";
import { ProcessingS3DataDistributionTypeEnum } from "./processings3datadistributiontypeenum";
import { ProcessingS3DataTypeEnum } from "./processings3datatypeenum";
import { ProcessingS3InputModeEnum } from "./processings3inputmodeenum";
/**
 * Configuration for downloading input data from Amazon S3 into the processing container.
**/
export declare class ProcessingS3Input extends SpeakeasyBase {
    localPath?: string;
    s3CompressionType?: ProcessingS3CompressionTypeEnum;
    s3DataDistributionType?: ProcessingS3DataDistributionTypeEnum;
    s3DataType: ProcessingS3DataTypeEnum;
    s3InputMode?: ProcessingS3InputModeEnum;
    s3Uri: string;
}
