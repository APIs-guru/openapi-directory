import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";



export class ListLoggingConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LoggingConfigurations", elemType: LoggingConfiguration })
  loggingConfigurations?: LoggingConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
