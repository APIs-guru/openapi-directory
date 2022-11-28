import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateDataSourceFromRedshiftOutput
/** 
 * <p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p> <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>
**/
export class CreateDataSourceFromRedshiftOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataSourceId" })
  dataSourceId?: string;
}
