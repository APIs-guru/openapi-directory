import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSetTypeEnum } from "./datasettypeenum";


// GenerateDataSetRequest
/** 
 * Container for the parameters to the GenerateDataSet operation.
**/
export class GenerateDataSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerDefinedValues" })
  customerDefinedValues?: Map<string, string>;

  @Metadata({ data: "json, name=dataSetPublicationDate" })
  dataSetPublicationDate: Date;

  @Metadata({ data: "json, name=dataSetType" })
  dataSetType: DataSetTypeEnum;

  @Metadata({ data: "json, name=destinationS3BucketName" })
  destinationS3BucketName: string;

  @Metadata({ data: "json, name=destinationS3Prefix" })
  destinationS3Prefix?: string;

  @Metadata({ data: "json, name=roleNameArn" })
  roleNameArn: string;

  @Metadata({ data: "json, name=snsTopicArn" })
  snsTopicArn: string;
}
