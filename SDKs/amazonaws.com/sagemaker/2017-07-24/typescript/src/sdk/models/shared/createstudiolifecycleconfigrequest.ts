import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StudioLifecycleConfigAppTypeEnum } from "./studiolifecycleconfigapptypeenum";
import { Tag } from "./tag";


export class CreateStudioLifecycleConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StudioLifecycleConfigAppType" })
  studioLifecycleConfigAppType: StudioLifecycleConfigAppTypeEnum;

  @Metadata({ data: "json, name=StudioLifecycleConfigContent" })
  studioLifecycleConfigContent: string;

  @Metadata({ data: "json, name=StudioLifecycleConfigName" })
  studioLifecycleConfigName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
