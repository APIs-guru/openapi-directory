import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteStudioLifecycleConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StudioLifecycleConfigName" })
  studioLifecycleConfigName: string;
}
