import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TableMember } from "./tablemember";
export declare class ListTablesResponse extends SpeakeasyBase {
    nextToken?: string;
    tables?: TableMember[];
}
