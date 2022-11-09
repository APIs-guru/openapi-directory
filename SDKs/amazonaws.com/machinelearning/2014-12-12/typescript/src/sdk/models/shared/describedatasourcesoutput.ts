import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSource } from "./datasource";


// DescribeDataSourcesOutput
/** 
 * Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.
**/
export class DescribeDataSourcesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Results", elemType: shared.DataSource })
  results?: DataSource[];
}
