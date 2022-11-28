import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotebookInstanceLifecycleConfigSummary
/** 
 * Provides a summary of a notebook instance lifecycle configuration.
**/
export class NotebookInstanceLifecycleConfigSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigArn" })
  notebookInstanceLifecycleConfigArn: string;

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigName" })
  notebookInstanceLifecycleConfigName: string;
}
