import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StudioLifecycleConfigAppTypeEnum } from "./studiolifecycleconfigapptypeenum";


// StudioLifecycleConfigDetails
/** 
 * Details of the Studio Lifecycle Configuration.
**/
export class StudioLifecycleConfigDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=StudioLifecycleConfigAppType" })
  studioLifecycleConfigAppType?: StudioLifecycleConfigAppTypeEnum;

  @Metadata({ data: "json, name=StudioLifecycleConfigArn" })
  studioLifecycleConfigArn?: string;

  @Metadata({ data: "json, name=StudioLifecycleConfigName" })
  studioLifecycleConfigName?: string;
}
