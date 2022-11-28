import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorParameter } from "./errorparameter";



// Error
/** 
 * This type contains a error or warning related to a call request.
**/
export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=errorId" })
  errorId?: number;

  @SpeakeasyMetadata({ data: "json, name=inputRefIds" })
  inputRefIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=longMessage" })
  longMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=outputRefIds" })
  outputRefIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: ErrorParameter })
  parameters?: ErrorParameter[];

  @SpeakeasyMetadata({ data: "json, name=subdomain" })
  subdomain?: string;
}
