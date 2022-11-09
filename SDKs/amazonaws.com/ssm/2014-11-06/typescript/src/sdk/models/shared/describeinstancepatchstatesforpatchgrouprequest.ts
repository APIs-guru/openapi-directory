import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstancePatchStateFilter } from "./instancepatchstatefilter";


export class DescribeInstancePatchStatesForPatchGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.InstancePatchStateFilter })
  filters?: InstancePatchStateFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PatchGroup" })
  patchGroup: string;
}
