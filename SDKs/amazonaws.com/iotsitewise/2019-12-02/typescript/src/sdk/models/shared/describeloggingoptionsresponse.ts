import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingOptions } from "./loggingoptions";



export class DescribeLoggingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loggingOptions" })
  loggingOptions: LoggingOptions;
}
