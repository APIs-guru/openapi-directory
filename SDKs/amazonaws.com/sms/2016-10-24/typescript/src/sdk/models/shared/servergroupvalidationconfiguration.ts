import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServerValidationConfiguration } from "./servervalidationconfiguration";


// ServerGroupValidationConfiguration
/** 
 * Configuration for validating an instance.
**/
export class ServerGroupValidationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=serverGroupId" })
  serverGroupId?: string;

  @Metadata({ data: "json, name=serverValidationConfigurations", elemType: shared.ServerValidationConfiguration })
  serverValidationConfigurations?: ServerValidationConfiguration[];
}
