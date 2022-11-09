import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotebookInstanceLifecycleHook } from "./notebookinstancelifecyclehook";
import { NotebookInstanceLifecycleHook } from "./notebookinstancelifecyclehook";


export class DescribeNotebookInstanceLifecycleConfigOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=NotebookInstanceLifecycleConfigArn" })
  notebookInstanceLifecycleConfigArn?: string;

  @Metadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName?: string;

  @Metadata({ data: "json, name=OnCreate", elemType: shared.NotebookInstanceLifecycleHook })
  onCreate?: NotebookInstanceLifecycleHook[];

  @Metadata({ data: "json, name=OnStart", elemType: shared.NotebookInstanceLifecycleHook })
  onStart?: NotebookInstanceLifecycleHook[];
}
