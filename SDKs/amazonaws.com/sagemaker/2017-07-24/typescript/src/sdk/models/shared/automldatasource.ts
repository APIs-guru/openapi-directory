import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoMls3DataSource } from "./automls3datasource";


// AutoMlDataSource
/** 
 * The data source for the Autopilot job.
**/
export class AutoMlDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3DataSource" })
  s3DataSource: AutoMls3DataSource;
}
