import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeTableRequest extends SpeakeasyBase {
    clusterIdentifier: string;
    connectedDatabase?: string;
    database: string;
    dbUser?: string;
    maxResults?: number;
    nextToken?: string;
    schema?: string;
    secretArn?: string;
    table?: string;
}
