import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteStudioLifecycleConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StudioLifecycleConfigName" })
  studioLifecycleConfigName: string;
}
