import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstancePatchStateFilter } from "./instancepatchstatefilter";



export class DescribeInstancePatchStatesForPatchGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: InstancePatchStateFilter })
  filters?: InstancePatchStateFilter[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PatchGroup" })
  patchGroup: string;
}
