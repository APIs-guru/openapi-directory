import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3DataDistributionEnum } from "./s3datadistributionenum";
import { S3DataTypeEnum } from "./s3datatypeenum";


// S3DataSource
/** 
 * Describes the S3 data source.
**/
export class S3DataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeNames" })
  attributeNames?: string[];

  @Metadata({ data: "json, name=S3DataDistributionType" })
  s3DataDistributionType?: S3DataDistributionEnum;

  @Metadata({ data: "json, name=S3DataType" })
  s3DataType: S3DataTypeEnum;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
