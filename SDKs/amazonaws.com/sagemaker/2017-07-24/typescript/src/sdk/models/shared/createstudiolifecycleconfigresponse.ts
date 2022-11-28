import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateStudioLifecycleConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StudioLifecycleConfigArn" })
  studioLifecycleConfigArn?: string;
}
