import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingOptions } from "./loggingoptions";


export class DescribeLoggingOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=loggingOptions" })
  loggingOptions: LoggingOptions;
}
