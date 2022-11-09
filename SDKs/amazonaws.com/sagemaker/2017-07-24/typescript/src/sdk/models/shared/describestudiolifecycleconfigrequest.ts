import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeStudioLifecycleConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StudioLifecycleConfigName" })
  studioLifecycleConfigName: string;
}
