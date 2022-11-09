import { SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryDefinition } from "./querydefinition";
export declare class DescribeQueryDefinitionsResponse extends SpeakeasyBase {
    nextToken?: string;
    queryDefinitions?: QueryDefinition[];
}
