import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContextSource } from "./contextsource";



// ContextSummary
/** 
 * Lists a summary of the properties of a context. A context provides a logical grouping of other entities.
**/
export class ContextSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContextArn" })
  contextArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ContextName" })
  contextName?: string;

  @SpeakeasyMetadata({ data: "json, name=ContextType" })
  contextType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: ContextSource;
}
