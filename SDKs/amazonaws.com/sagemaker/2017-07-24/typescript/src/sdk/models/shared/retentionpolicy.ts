import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionTypeEnum } from "./retentiontypeenum";



// RetentionPolicy
/** 
 * The retention policy for data stored on an Amazon Elastic File System (EFS) volume.
**/
export class RetentionPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HomeEfsFileSystem" })
  homeEfsFileSystem?: RetentionTypeEnum;
}
