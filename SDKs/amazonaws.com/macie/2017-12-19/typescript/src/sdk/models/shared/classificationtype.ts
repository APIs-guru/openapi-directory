import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3ContinuousClassificationTypeEnum } from "./s3continuousclassificationtypeenum";
import { S3OneTimeClassificationTypeEnum } from "./s3onetimeclassificationtypeenum";


// ClassificationType
/** 
 * The classification type that Amazon Macie Classic applies to the associated S3 resources. 
**/
export class ClassificationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=continuous" })
  continuous: S3ContinuousClassificationTypeEnum;

  @Metadata({ data: "json, name=oneTime" })
  oneTime: S3OneTimeClassificationTypeEnum;
}
