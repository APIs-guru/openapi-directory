import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingS3CompressionTypeEnum } from "./processings3compressiontypeenum";
import { ProcessingS3DataDistributionTypeEnum } from "./processings3datadistributiontypeenum";
import { ProcessingS3DataTypeEnum } from "./processings3datatypeenum";
import { ProcessingS3InputModeEnum } from "./processings3inputmodeenum";



// ProcessingS3Input
/** 
 * Configuration for downloading input data from Amazon S3 into the processing container.
**/
export class ProcessingS3Input extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocalPath" })
  localPath?: string;

  @SpeakeasyMetadata({ data: "json, name=S3CompressionType" })
  s3CompressionType?: ProcessingS3CompressionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3DataDistributionType" })
  s3DataDistributionType?: ProcessingS3DataDistributionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3DataType" })
  s3DataType: ProcessingS3DataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3InputMode" })
  s3InputMode?: ProcessingS3InputModeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
