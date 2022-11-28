import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Record
/** 
 * An occurrence of sensitive data in an Apache Avro object container or an Apache Parquet file.
**/
export class Record extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JsonPath" })
  jsonPath?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordIndex" })
  recordIndex?: number;
}
