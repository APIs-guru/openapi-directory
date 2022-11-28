import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeResourcePoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
