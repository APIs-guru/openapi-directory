import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppValidationStrategyEnum } from "./appvalidationstrategyenum";
import { SsmValidationParameters } from "./ssmvalidationparameters";



// AppValidationConfiguration
/** 
 * Configuration for validating an application.
**/
export class AppValidationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appValidationStrategy" })
  appValidationStrategy?: AppValidationStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ssmValidationParameters" })
  ssmValidationParameters?: SsmValidationParameters;

  @SpeakeasyMetadata({ data: "json, name=validationId" })
  validationId?: string;
}
