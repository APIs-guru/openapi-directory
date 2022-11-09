import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Record
/** 
 * An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.
**/
export class Record extends SpeakeasyBase {
  @Metadata({ data: "json, name=JsonPath" })
  jsonPath?: string;

  @Metadata({ data: "json, name=RecordIndex" })
  recordIndex?: number;
}
