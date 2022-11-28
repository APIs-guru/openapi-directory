import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStudioLifecycleConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StudioLifecycleConfigName" })
  studioLifecycleConfigName: string;
}
