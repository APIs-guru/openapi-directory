import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionTypeEnum } from "./retentiontypeenum";


// RetentionPolicy
/** 
 * The retention policy for data stored on an Amazon Elastic File System (EFS) volume.
**/
export class RetentionPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=HomeEfsFileSystem" })
  homeEfsFileSystem?: RetentionTypeEnum;
}
