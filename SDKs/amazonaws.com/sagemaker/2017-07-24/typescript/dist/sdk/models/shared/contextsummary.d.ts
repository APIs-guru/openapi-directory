import { SpeakeasyBase } from "../../../internal/utils";
import { ContextSource } from "./contextsource";
/**
 * Lists a summary of the properties of a context. A context provides a logical grouping of other entities.
**/
export declare class ContextSummary extends SpeakeasyBase {
    contextArn?: string;
    contextName?: string;
    contextType?: string;
    creationTime?: Date;
    lastModifiedTime?: Date;
    source?: ContextSource;
}
