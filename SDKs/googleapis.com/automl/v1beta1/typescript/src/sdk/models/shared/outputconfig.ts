import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDestination } from "./bigquerydestination";
import { GcsDestination } from "./gcsdestination";



// OutputConfig
/** 
 * * For Translation: CSV file `translation.csv`, with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .TSV file which describes examples that have given ML_USE, using the following row format per line: TEXT_SNIPPET (in source language) \t TEXT_SNIPPET (in target language) * For Tables: Output depends on whether the dataset was imported from GCS or BigQuery. GCS case: gcs_destination must be set. Exported are CSV file(s) `tables_1.csv`, `tables_2.csv`,...,`tables_N.csv` with each having as header line the table's column names, and all other lines contain values for the header columns. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_data__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In that dataset a new table called `primary_table` will be created, and filled with precisely the same data as this obtained on import.
**/
export class OutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: BigQueryDestination;

  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
