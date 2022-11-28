import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SparkLoggingInfo } from "./sparklogginginfo";



export class SparkStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoints" })
  endpoints?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=logging_info" })
  loggingInfo?: SparkLoggingInfo;

  @SpeakeasyMetadata({ data: "json, name=spark_job_id" })
  sparkJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=spark_job_location" })
  sparkJobLocation?: string;
}
