import { SpeakeasyBase } from "../../../internal/utils";
import { Constraints } from "./constraints";
import { PlayerContext } from "./playercontext";
export declare class Session extends SpeakeasyBase {
    constraints: Constraints;
    deadline: Date;
    identifier: string;
    playerContext?: PlayerContext;
    requested: Date;
    version: string;
}
