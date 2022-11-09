import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceShare } from "./resourceshare";


export class GetResourceSharesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceShares", elemType: shared.ResourceShare })
  resourceShares?: ResourceShare[];
}
