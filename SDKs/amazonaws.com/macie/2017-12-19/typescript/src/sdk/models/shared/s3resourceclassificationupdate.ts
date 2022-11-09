import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassificationTypeUpdate } from "./classificationtypeupdate";


// S3ResourceClassificationUpdate
/** 
 * The S3 resources whose classification types you want to update. This data type is used as a request parameter in the UpdateS3Resources action. 
**/
export class S3ResourceClassificationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=classificationTypeUpdate" })
  classificationTypeUpdate: ClassificationTypeUpdate;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;
}
