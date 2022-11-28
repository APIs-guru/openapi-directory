import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationExecutionTargetsFilter } from "./associationexecutiontargetsfilter";
export declare class DescribeAssociationExecutionTargetsRequest extends SpeakeasyBase {
    associationId: string;
    executionId: string;
    filters?: AssociationExecutionTargetsFilter[];
    maxResults?: number;
    nextToken?: string;
}
