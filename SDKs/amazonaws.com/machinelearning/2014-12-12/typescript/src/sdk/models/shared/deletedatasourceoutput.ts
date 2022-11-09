import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteDataSourceOutput
/** 
 *  Represents the output of a <code>DeleteDataSource</code> operation.
**/
export class DeleteDataSourceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSourceId" })
  dataSourceId?: string;
}
