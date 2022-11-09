import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataSource
/** 
 * Describes an app's data source.
**/
export class DataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
