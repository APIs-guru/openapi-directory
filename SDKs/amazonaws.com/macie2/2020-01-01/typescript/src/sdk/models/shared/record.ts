import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Record
/** 
 * Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file.
**/
export class Record extends SpeakeasyBase {
  @Metadata({ data: "json, name=jsonPath" })
  jsonPath?: string;

  @Metadata({ data: "json, name=recordIndex" })
  recordIndex?: number;
}
