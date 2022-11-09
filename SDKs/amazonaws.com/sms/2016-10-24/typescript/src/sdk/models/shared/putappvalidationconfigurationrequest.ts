import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppValidationConfiguration } from "./appvalidationconfiguration";
import { ServerGroupValidationConfiguration } from "./servergroupvalidationconfiguration";


export class PutAppValidationConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId: string;

  @Metadata({ data: "json, name=appValidationConfigurations", elemType: shared.AppValidationConfiguration })
  appValidationConfigurations?: AppValidationConfiguration[];

  @Metadata({ data: "json, name=serverGroupValidationConfigurations", elemType: shared.ServerGroupValidationConfiguration })
  serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];
}
