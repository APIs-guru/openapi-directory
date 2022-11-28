import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLoadBalancersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
