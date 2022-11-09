import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SupportDataSetTypeEnum } from "./supportdatasettypeenum";


// StartSupportDataExportRequest
/** 
 * Container for the parameters to the StartSupportDataExport operation.
**/
export class StartSupportDataExportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerDefinedValues" })
  customerDefinedValues?: Map<string, string>;

  @Metadata({ data: "json, name=dataSetType" })
  dataSetType: SupportDataSetTypeEnum;

  @Metadata({ data: "json, name=destinationS3BucketName" })
  destinationS3BucketName: string;

  @Metadata({ data: "json, name=destinationS3Prefix" })
  destinationS3Prefix?: string;

  @Metadata({ data: "json, name=fromDate" })
  fromDate: Date;

  @Metadata({ data: "json, name=roleNameArn" })
  roleNameArn: string;

  @Metadata({ data: "json, name=snsTopicArn" })
  snsTopicArn: string;
}
