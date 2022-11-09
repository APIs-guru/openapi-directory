import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LaunchProfileInitializationScript extends SpeakeasyBase {
  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=studioComponentId" })
  studioComponentId?: string;

  @Metadata({ data: "json, name=studioComponentName" })
  studioComponentName?: string;
}
