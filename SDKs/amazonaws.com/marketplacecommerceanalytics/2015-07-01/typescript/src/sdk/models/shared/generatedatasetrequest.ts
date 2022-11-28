import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSetTypeEnum } from "./datasettypeenum";



// GenerateDataSetRequest
/** 
 * Container for the parameters to the GenerateDataSet operation.
**/
export class GenerateDataSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerDefinedValues" })
  customerDefinedValues?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=dataSetPublicationDate" })
  dataSetPublicationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=dataSetType" })
  dataSetType: DataSetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=destinationS3BucketName" })
  destinationS3BucketName: string;

  @SpeakeasyMetadata({ data: "json, name=destinationS3Prefix" })
  destinationS3Prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=roleNameArn" })
  roleNameArn: string;

  @SpeakeasyMetadata({ data: "json, name=snsTopicArn" })
  snsTopicArn: string;
}
