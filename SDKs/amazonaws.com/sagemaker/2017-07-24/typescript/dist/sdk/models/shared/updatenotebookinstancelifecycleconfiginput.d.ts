import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceLifecycleHook } from "./notebookinstancelifecyclehook";
export declare class UpdateNotebookInstanceLifecycleConfigInput extends SpeakeasyBase {
    notebookInstanceLifecycleConfigName: string;
    onCreate?: NotebookInstanceLifecycleHook[];
    onStart?: NotebookInstanceLifecycleHook[];
}
