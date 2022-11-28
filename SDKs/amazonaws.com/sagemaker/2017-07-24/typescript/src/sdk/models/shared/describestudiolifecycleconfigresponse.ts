import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioLifecycleConfigAppTypeEnum } from "./studiolifecycleconfigapptypeenum";



export class DescribeStudioLifecycleConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StudioLifecycleConfigAppType" })
  studioLifecycleConfigAppType?: StudioLifecycleConfigAppTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StudioLifecycleConfigArn" })
  studioLifecycleConfigArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StudioLifecycleConfigContent" })
  studioLifecycleConfigContent?: string;

  @SpeakeasyMetadata({ data: "json, name=StudioLifecycleConfigName" })
  studioLifecycleConfigName?: string;
}
