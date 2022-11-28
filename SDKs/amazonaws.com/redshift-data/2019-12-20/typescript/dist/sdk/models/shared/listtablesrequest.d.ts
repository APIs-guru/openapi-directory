import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListTablesRequest extends SpeakeasyBase {
    clusterIdentifier: string;
    connectedDatabase?: string;
    database: string;
    dbUser?: string;
    maxResults?: number;
    nextToken?: string;
    schemaPattern?: string;
    secretArn?: string;
    tablePattern?: string;
}
