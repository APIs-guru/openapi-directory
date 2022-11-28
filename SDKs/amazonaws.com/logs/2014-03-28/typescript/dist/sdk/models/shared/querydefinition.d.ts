import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This structure contains details about a saved CloudWatch Logs Insights query definition.
**/
export declare class QueryDefinition extends SpeakeasyBase {
    lastModified?: number;
    logGroupNames?: string[];
    name?: string;
    queryDefinitionId?: string;
    queryString?: string;
}
