import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLoadBalancersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
