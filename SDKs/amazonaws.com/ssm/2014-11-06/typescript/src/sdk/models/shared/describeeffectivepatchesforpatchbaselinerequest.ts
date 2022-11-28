import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEffectivePatchesForPatchBaselineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
