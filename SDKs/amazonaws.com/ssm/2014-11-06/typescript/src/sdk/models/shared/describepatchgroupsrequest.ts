import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatchOrchestratorFilter } from "./patchorchestratorfilter";


export class DescribePatchGroupsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.PatchOrchestratorFilter })
  filters?: PatchOrchestratorFilter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
