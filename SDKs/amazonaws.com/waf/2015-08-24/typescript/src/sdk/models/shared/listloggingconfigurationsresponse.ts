import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LoggingConfiguration } from "./loggingconfiguration";


export class ListLoggingConfigurationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LoggingConfigurations", elemType: shared.LoggingConfiguration })
  loggingConfigurations?: LoggingConfiguration[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
