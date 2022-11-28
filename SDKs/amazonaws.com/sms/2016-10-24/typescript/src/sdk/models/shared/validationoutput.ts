import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppValidationOutput } from "./appvalidationoutput";
import { ServerValidationOutput } from "./servervalidationoutput";
import { ValidationStatusEnum } from "./validationstatusenum";



// ValidationOutput
/** 
 * Contains validation output.
**/
export class ValidationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appValidationOutput" })
  appValidationOutput?: AppValidationOutput;

  @SpeakeasyMetadata({ data: "json, name=latestValidationTime" })
  latestValidationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serverValidationOutput" })
  serverValidationOutput?: ServerValidationOutput;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ValidationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=validationId" })
  validationId?: string;
}
