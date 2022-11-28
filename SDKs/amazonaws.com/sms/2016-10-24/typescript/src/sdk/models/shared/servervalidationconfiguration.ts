import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Server } from "./server";
import { ServerValidationStrategyEnum } from "./servervalidationstrategyenum";
import { UserDataValidationParameters } from "./userdatavalidationparameters";



// ServerValidationConfiguration
/** 
 * Configuration for validating an instance.
**/
export class ServerValidationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: Server;

  @SpeakeasyMetadata({ data: "json, name=serverValidationStrategy" })
  serverValidationStrategy?: ServerValidationStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=userDataValidationParameters" })
  userDataValidationParameters?: UserDataValidationParameters;

  @SpeakeasyMetadata({ data: "json, name=validationId" })
  validationId?: string;
}
