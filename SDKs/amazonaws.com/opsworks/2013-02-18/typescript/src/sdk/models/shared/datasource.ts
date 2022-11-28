import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataSource
/** 
 * Describes an app's data source.
**/
export class DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
