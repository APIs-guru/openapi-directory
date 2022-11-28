import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationExecutionFilter } from "./associationexecutionfilter";
export declare class DescribeAssociationExecutionsRequest extends SpeakeasyBase {
    associationId: string;
    filters?: AssociationExecutionFilter[];
    maxResults?: number;
    nextToken?: string;
}
