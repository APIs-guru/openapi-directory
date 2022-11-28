import { SpeakeasyBase } from "../../../internal/utils";
import { TargetWorkspaceStateEnum } from "./targetworkspacestateenum";
export declare class ModifyWorkspaceStateRequest extends SpeakeasyBase {
    workspaceId: string;
    workspaceState: TargetWorkspaceStateEnum;
}
