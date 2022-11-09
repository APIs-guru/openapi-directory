import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StudioLifecycleConfigDetails } from "./studiolifecycleconfigdetails";


export class ListStudioLifecycleConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StudioLifecycleConfigs", elemType: shared.StudioLifecycleConfigDetails })
  studioLifecycleConfigs?: StudioLifecycleConfigDetails[];
}
