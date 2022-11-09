import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEffectivePatchesForPatchBaselineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineId" })
  baselineId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
