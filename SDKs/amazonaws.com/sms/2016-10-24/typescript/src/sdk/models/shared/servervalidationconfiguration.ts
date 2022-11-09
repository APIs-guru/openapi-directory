import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Server } from "./server";
import { ServerValidationStrategyEnum } from "./servervalidationstrategyenum";
import { UserDataValidationParameters } from "./userdatavalidationparameters";


// ServerValidationConfiguration
/** 
 * Configuration for validating an instance.
**/
export class ServerValidationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=server" })
  server?: Server;

  @Metadata({ data: "json, name=serverValidationStrategy" })
  serverValidationStrategy?: ServerValidationStrategyEnum;

  @Metadata({ data: "json, name=userDataValidationParameters" })
  userDataValidationParameters?: UserDataValidationParameters;

  @Metadata({ data: "json, name=validationId" })
  validationId?: string;
}
