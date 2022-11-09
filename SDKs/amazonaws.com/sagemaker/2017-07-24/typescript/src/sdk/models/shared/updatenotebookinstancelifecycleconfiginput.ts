import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotebookInstanceLifecycleHook } from "./notebookinstancelifecyclehook";
import { NotebookInstanceLifecycleHook } from "./notebookinstancelifecyclehook";


export class UpdateNotebookInstanceLifecycleConfigInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName: string;

  @Metadata({ data: "json, name=OnCreate", elemType: shared.NotebookInstanceLifecycleHook })
  onCreate?: NotebookInstanceLifecycleHook[];

  @Metadata({ data: "json, name=OnStart", elemType: shared.NotebookInstanceLifecycleHook })
  onStart?: NotebookInstanceLifecycleHook[];
}
