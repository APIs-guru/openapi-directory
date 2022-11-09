import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputDataConfig
/** 
 * The object that contains the Amazon S3 object location and access role required to train and tune your custom language model.
**/
export class InputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn: string;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;

  @Metadata({ data: "json, name=TuningDataS3Uri" })
  tuningDataS3Uri?: string;
}
