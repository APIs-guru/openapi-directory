import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
export declare class ListTablesResponse extends SpeakeasyBase {
    nextToken?: string;
    tables?: Table[];
}
