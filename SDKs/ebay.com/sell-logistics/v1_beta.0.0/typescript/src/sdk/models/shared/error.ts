import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorParameter } from "./errorparameter";


// Error
/** 
 * A container that defines the elements of error and warning message.
**/
export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=errorId" })
  errorId?: number;

  @Metadata({ data: "json, name=inputRefIds" })
  inputRefIds?: string[];

  @Metadata({ data: "json, name=longMessage" })
  longMessage?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=outputRefIds" })
  outputRefIds?: string[];

  @Metadata({ data: "json, name=parameters", elemType: shared.ErrorParameter })
  parameters?: ErrorParameter[];

  @Metadata({ data: "json, name=subdomain" })
  subdomain?: string;
}
