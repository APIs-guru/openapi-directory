import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContextSource } from "./contextsource";


// ContextSummary
/** 
 * Lists a summary of the properties of a context. A context provides a logical grouping of other entities.
**/
export class ContextSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContextArn" })
  contextArn?: string;

  @Metadata({ data: "json, name=ContextName" })
  contextName?: string;

  @Metadata({ data: "json, name=ContextType" })
  contextType?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=Source" })
  source?: ContextSource;
}
