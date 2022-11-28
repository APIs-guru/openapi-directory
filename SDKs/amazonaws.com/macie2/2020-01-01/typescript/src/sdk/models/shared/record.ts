import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Record
/** 
 * Specifies the location of an occurrence of sensitive data in an Apache Avro object container, Apache Parquet file, JSON file, or JSON Lines file.
**/
export class Record extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jsonPath" })
  jsonPath?: string;

  @SpeakeasyMetadata({ data: "json, name=recordIndex" })
  recordIndex?: number;
}
