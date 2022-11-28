import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioLifecycleConfigDetails } from "./studiolifecycleconfigdetails";



export class ListStudioLifecycleConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StudioLifecycleConfigs", elemType: StudioLifecycleConfigDetails })
  studioLifecycleConfigs?: StudioLifecycleConfigDetails[];
}
