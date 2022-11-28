import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeWindow } from "./timewindow";



export class GetSampledRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxItems" })
  maxItems: number;

  @SpeakeasyMetadata({ data: "json, name=RuleId" })
  ruleId: string;

  @SpeakeasyMetadata({ data: "json, name=TimeWindow" })
  timeWindow: TimeWindow;

  @SpeakeasyMetadata({ data: "json, name=WebAclId" })
  webAclId: string;
}
