import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Receipt } from "./receipt";
export declare class ListPageReceiptsResult extends SpeakeasyBase {
    nextToken?: string;
    receipts?: Receipt[];
}
