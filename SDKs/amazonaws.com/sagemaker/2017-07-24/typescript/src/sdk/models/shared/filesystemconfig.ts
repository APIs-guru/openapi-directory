import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileSystemConfig
/** 
 * The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
**/
export class FileSystemConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultGid" })
  defaultGid?: number;

  @Metadata({ data: "json, name=DefaultUid" })
  defaultUid?: number;

  @Metadata({ data: "json, name=MountPath" })
  mountPath?: string;
}
