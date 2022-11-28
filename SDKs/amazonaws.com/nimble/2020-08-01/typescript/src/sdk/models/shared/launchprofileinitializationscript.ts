import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LaunchProfileInitializationScript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=studioComponentId" })
  studioComponentId?: string;

  @SpeakeasyMetadata({ data: "json, name=studioComponentName" })
  studioComponentName?: string;
}
