import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationTypeUpdate } from "./classificationtypeupdate";



// S3ResourceClassificationUpdate
/** 
 * The S3 resources whose classification types you want to update. This data type is used as a request parameter in the UpdateS3Resources action. 
**/
export class S3ResourceClassificationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=classificationTypeUpdate" })
  classificationTypeUpdate: ClassificationTypeUpdate;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;
}
