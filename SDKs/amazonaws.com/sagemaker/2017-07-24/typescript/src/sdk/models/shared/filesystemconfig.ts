import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileSystemConfig
/** 
 * The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
**/
export class FileSystemConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultGid" })
  defaultGid?: number;

  @SpeakeasyMetadata({ data: "json, name=DefaultUid" })
  defaultUid?: number;

  @SpeakeasyMetadata({ data: "json, name=MountPath" })
  mountPath?: string;
}
