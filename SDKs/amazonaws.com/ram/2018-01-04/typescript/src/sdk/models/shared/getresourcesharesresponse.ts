import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceShare } from "./resourceshare";



export class GetResourceSharesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShares", elemType: ResourceShare })
  resourceShares?: ResourceShare[];
}
