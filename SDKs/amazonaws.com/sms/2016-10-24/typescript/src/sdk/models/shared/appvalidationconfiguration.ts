import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppValidationStrategyEnum } from "./appvalidationstrategyenum";
import { SsmValidationParameters } from "./ssmvalidationparameters";


// AppValidationConfiguration
/** 
 * Configuration for validating an application.
**/
export class AppValidationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=appValidationStrategy" })
  appValidationStrategy?: AppValidationStrategyEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ssmValidationParameters" })
  ssmValidationParameters?: SsmValidationParameters;

  @Metadata({ data: "json, name=validationId" })
  validationId?: string;
}
