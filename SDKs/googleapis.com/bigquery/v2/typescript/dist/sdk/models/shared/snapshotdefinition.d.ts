import { SpeakeasyBase } from "../../../internal/utils";
import { TableReference } from "./tablereference";
export declare class SnapshotDefinition extends SpeakeasyBase {
    baseTableReference?: TableReference;
    snapshotTime?: Date;
}
