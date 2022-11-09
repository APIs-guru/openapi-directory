import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeResourcePoliciesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
