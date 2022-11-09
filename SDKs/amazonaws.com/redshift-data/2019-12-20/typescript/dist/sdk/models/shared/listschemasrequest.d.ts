import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListSchemasRequest extends SpeakeasyBase {
    clusterIdentifier: string;
    connectedDatabase?: string;
    database: string;
    dbUser?: string;
    maxResults?: number;
    nextToken?: string;
    schemaPattern?: string;
    secretArn?: string;
}
