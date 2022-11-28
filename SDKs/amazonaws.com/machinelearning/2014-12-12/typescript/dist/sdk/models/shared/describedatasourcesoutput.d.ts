import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.
**/
export declare class DescribeDataSourcesOutput extends SpeakeasyBase {
    nextToken?: string;
    results?: DataSource[];
}
