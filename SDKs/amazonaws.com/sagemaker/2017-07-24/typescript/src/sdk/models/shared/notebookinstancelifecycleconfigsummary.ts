import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotebookInstanceLifecycleConfigSummary
/** 
 * Provides a summary of a notebook instance lifecycle configuration.
**/
export class NotebookInstanceLifecycleConfigSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=NotebookInstanceLifecycleConfigArn" })
  notebookInstanceLifecycleConfigArn: string;

  @Metadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName: string;
}
