import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information on a recommendation filter, including its ARN, status, and filter expression.
**/
export declare class Filter extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetGroupArn?: string;
    failureReason?: string;
    filterArn?: string;
    filterExpression?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    status?: string;
}
