import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputDataConfig
/** 
 * The object that contains the Amazon S3 object location and access role required to train and tune your custom language model.
**/
export class InputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;

  @SpeakeasyMetadata({ data: "json, name=TuningDataS3Uri" })
  tuningDataS3Uri?: string;
}
