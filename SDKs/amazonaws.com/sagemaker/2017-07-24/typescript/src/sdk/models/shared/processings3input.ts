import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProcessingS3CompressionTypeEnum } from "./processings3compressiontypeenum";
import { ProcessingS3DataDistributionTypeEnum } from "./processings3datadistributiontypeenum";
import { ProcessingS3DataTypeEnum } from "./processings3datatypeenum";
import { ProcessingS3InputModeEnum } from "./processings3inputmodeenum";


// ProcessingS3Input
/** 
 * Configuration for downloading input data from Amazon S3 into the processing container.
**/
export class ProcessingS3Input extends SpeakeasyBase {
  @Metadata({ data: "json, name=LocalPath" })
  localPath?: string;

  @Metadata({ data: "json, name=S3CompressionType" })
  s3CompressionType?: ProcessingS3CompressionTypeEnum;

  @Metadata({ data: "json, name=S3DataDistributionType" })
  s3DataDistributionType?: ProcessingS3DataDistributionTypeEnum;

  @Metadata({ data: "json, name=S3DataType" })
  s3DataType: ProcessingS3DataTypeEnum;

  @Metadata({ data: "json, name=S3InputMode" })
  s3InputMode?: ProcessingS3InputModeEnum;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
