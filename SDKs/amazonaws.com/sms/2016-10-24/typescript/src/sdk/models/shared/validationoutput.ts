import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppValidationOutput } from "./appvalidationoutput";
import { ServerValidationOutput } from "./servervalidationoutput";
import { ValidationStatusEnum } from "./validationstatusenum";


// ValidationOutput
/** 
 * Contains validation output.
**/
export class ValidationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=appValidationOutput" })
  appValidationOutput?: AppValidationOutput;

  @Metadata({ data: "json, name=latestValidationTime" })
  latestValidationTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serverValidationOutput" })
  serverValidationOutput?: ServerValidationOutput;

  @Metadata({ data: "json, name=status" })
  status?: ValidationStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=validationId" })
  validationId?: string;
}
