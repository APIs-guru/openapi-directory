import { SpeakeasyBase } from "../../../internal/utils";
import { OpsItemSummary } from "./opsitemsummary";
export declare class DescribeOpsItemsResponse extends SpeakeasyBase {
    nextToken?: string;
    opsItemSummaries?: OpsItemSummary[];
}
