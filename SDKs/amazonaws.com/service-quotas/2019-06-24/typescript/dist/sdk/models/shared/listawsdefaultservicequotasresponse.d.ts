import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceQuota } from "./servicequota";
export declare class ListAwsDefaultServiceQuotasResponse extends SpeakeasyBase {
    nextToken?: string;
    quotas?: ServiceQuota[];
}
