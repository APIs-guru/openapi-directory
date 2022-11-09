import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyTypeEnum } from "./policytypeenum";


export class ListPoliciesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter: PolicyTypeEnum;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
