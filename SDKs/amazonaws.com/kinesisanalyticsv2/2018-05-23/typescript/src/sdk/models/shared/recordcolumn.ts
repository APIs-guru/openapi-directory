import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecordColumn
/** 
 * <p>For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>
**/
export class RecordColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mapping" })
  mapping?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SqlType" })
  sqlType: string;
}
