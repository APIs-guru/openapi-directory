import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShare } from "./resourceshare";
export declare class GetResourceSharesResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceShares?: ResourceShare[];
}
