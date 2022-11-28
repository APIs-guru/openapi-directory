import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3ContinuousClassificationTypeEnum } from "./s3continuousclassificationtypeenum";
import { S3OneTimeClassificationTypeEnum } from "./s3onetimeclassificationtypeenum";



// ClassificationTypeUpdate
/** 
 * The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (oneTime or continuous) must be specified. 
**/
export class ClassificationTypeUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continuous" })
  continuous?: S3ContinuousClassificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=oneTime" })
  oneTime?: S3OneTimeClassificationTypeEnum;
}
