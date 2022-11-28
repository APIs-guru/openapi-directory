import { SpeakeasyBase } from "../../../internal/utils";
import { QueryDefinition } from "./querydefinition";
export declare class DescribeQueryDefinitionsResponse extends SpeakeasyBase {
    nextToken?: string;
    queryDefinitions?: QueryDefinition[];
}
