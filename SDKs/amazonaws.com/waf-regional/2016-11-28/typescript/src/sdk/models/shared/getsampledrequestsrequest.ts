import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeWindow } from "./timewindow";


export class GetSampledRequestsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxItems" })
  maxItems: number;

  @Metadata({ data: "json, name=RuleId" })
  ruleId: string;

  @Metadata({ data: "json, name=TimeWindow" })
  timeWindow: TimeWindow;

  @Metadata({ data: "json, name=WebAclId" })
  webAclId: string;
}
