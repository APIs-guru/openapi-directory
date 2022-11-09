import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SparkLoggingInfo } from "./sparklogginginfo";


export class SparkStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoints" })
  endpoints?: Map<string, string>;

  @Metadata({ data: "json, name=logging_info" })
  loggingInfo?: SparkLoggingInfo;

  @Metadata({ data: "json, name=spark_job_id" })
  sparkJobId?: string;

  @Metadata({ data: "json, name=spark_job_location" })
  sparkJobLocation?: string;
}
