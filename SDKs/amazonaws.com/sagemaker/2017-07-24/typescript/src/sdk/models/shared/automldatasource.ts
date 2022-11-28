import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMls3DataSource } from "./automls3datasource";



// AutoMlDataSource
/** 
 * The data source for the Autopilot job.
**/
export class AutoMlDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3DataSource" })
  s3DataSource: AutoMls3DataSource;
}
