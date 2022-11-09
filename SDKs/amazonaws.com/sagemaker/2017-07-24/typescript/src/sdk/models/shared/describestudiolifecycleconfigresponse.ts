import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StudioLifecycleConfigAppTypeEnum } from "./studiolifecycleconfigapptypeenum";


export class DescribeStudioLifecycleConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=StudioLifecycleConfigAppType" })
  studioLifecycleConfigAppType?: StudioLifecycleConfigAppTypeEnum;

  @Metadata({ data: "json, name=StudioLifecycleConfigArn" })
  studioLifecycleConfigArn?: string;

  @Metadata({ data: "json, name=StudioLifecycleConfigContent" })
  studioLifecycleConfigContent?: string;

  @Metadata({ data: "json, name=StudioLifecycleConfigName" })
  studioLifecycleConfigName?: string;
}
