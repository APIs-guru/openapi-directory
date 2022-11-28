import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDataSourceOutput
/** 
 *  Represents the output of a <code>DeleteDataSource</code> operation.
**/
export class DeleteDataSourceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataSourceId" })
  dataSourceId?: string;
}
