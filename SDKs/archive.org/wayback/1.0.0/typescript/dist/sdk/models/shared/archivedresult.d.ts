import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
export declare class ArchivedResult extends SpeakeasyBase {
    snapshot: Snapshot;
    tag?: string;
    timestamp: string;
    url: string;
}
