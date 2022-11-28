import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerValidationConfiguration } from "./servervalidationconfiguration";



// ServerGroupValidationConfiguration
/** 
 * Configuration for validating an instance.
**/
export class ServerGroupValidationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serverGroupId" })
  serverGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=serverValidationConfigurations", elemType: ServerValidationConfiguration })
  serverValidationConfigurations?: ServerValidationConfiguration[];
}
