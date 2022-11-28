import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";



// DescribeDataSourcesOutput
/** 
 * Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.
**/
export class DescribeDataSourcesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Results", elemType: DataSource })
  results?: DataSource[];
}
