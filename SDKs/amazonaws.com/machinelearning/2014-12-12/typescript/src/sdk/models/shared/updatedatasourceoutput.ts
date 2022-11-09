import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateDataSourceOutput
/** 
 * <p>Represents the output of an <code>UpdateDataSource</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
**/
export class UpdateDataSourceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSourceId" })
  dataSourceId?: string;
}
