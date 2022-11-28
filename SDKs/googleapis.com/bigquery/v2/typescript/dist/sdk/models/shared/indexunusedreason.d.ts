import { SpeakeasyBase } from "../../../internal/utils";
import { TableReference } from "./tablereference";
export declare class IndexUnusedReason extends SpeakeasyBase {
    baseTable?: TableReference;
    code?: string;
    indexName?: string;
    message?: string;
}
