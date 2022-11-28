import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppValidationConfiguration } from "./appvalidationconfiguration";
import { ServerGroupValidationConfiguration } from "./servergroupvalidationconfiguration";



export class PutAppValidationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "json, name=appValidationConfigurations", elemType: AppValidationConfiguration })
  appValidationConfigurations?: AppValidationConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=serverGroupValidationConfigurations", elemType: ServerGroupValidationConfiguration })
  serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];
}
