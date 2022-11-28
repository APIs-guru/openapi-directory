import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceLifecycleHook } from "./notebookinstancelifecyclehook";



export class UpdateNotebookInstanceLifecycleConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName: string;

  @SpeakeasyMetadata({ data: "json, name=OnCreate", elemType: NotebookInstanceLifecycleHook })
  onCreate?: NotebookInstanceLifecycleHook[];

  @SpeakeasyMetadata({ data: "json, name=OnStart", elemType: NotebookInstanceLifecycleHook })
  onStart?: NotebookInstanceLifecycleHook[];
}
