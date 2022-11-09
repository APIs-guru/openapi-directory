import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecordColumn
/** 
 * <p>For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>
**/
export class RecordColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mapping" })
  mapping?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SqlType" })
  sqlType: string;
}
