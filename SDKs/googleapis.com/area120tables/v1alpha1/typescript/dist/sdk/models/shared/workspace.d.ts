import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Table } from "./table";
/**
 * A single workspace.
**/
export declare class Workspace extends SpeakeasyBase {
    createTime?: string;
    displayName?: string;
    name?: string;
    tables?: Table[];
    updateTime?: string;
}
