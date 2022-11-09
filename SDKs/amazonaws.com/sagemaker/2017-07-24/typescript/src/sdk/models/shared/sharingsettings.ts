import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotebookOutputOptionEnum } from "./notebookoutputoptionenum";


// SharingSettings
/** 
 * Specifies options for sharing SageMaker Studio notebooks. These settings are specified as part of <code>DefaultUserSettings</code> when the <code>CreateDomain</code> API is called, and as part of <code>UserSettings</code> when the <code>CreateUserProfile</code> API is called. When <code>SharingSettings</code> is not specified, notebook sharing isn't allowed.
**/
export class SharingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookOutputOption" })
  notebookOutputOption?: NotebookOutputOptionEnum;

  @Metadata({ data: "json, name=S3KmsKeyId" })
  s3KmsKeyId?: string;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath?: string;
}
