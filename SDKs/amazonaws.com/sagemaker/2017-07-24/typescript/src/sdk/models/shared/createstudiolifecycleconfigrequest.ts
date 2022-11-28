import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioLifecycleConfigAppTypeEnum } from "./studiolifecycleconfigapptypeenum";
import { Tag } from "./tag";



export class CreateStudioLifecycleConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StudioLifecycleConfigAppType" })
  studioLifecycleConfigAppType: StudioLifecycleConfigAppTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StudioLifecycleConfigContent" })
  studioLifecycleConfigContent: string;

  @SpeakeasyMetadata({ data: "json, name=StudioLifecycleConfigName" })
  studioLifecycleConfigName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
