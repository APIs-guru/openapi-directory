import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportDataSetTypeEnum } from "./supportdatasettypeenum";



// StartSupportDataExportRequest
/** 
 * Container for the parameters to the StartSupportDataExport operation.
**/
export class StartSupportDataExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerDefinedValues" })
  customerDefinedValues?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=dataSetType" })
  dataSetType: SupportDataSetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=destinationS3BucketName" })
  destinationS3BucketName: string;

  @SpeakeasyMetadata({ data: "json, name=destinationS3Prefix" })
  destinationS3Prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate: Date;

  @SpeakeasyMetadata({ data: "json, name=roleNameArn" })
  roleNameArn: string;

  @SpeakeasyMetadata({ data: "json, name=snsTopicArn" })
  snsTopicArn: string;
}
