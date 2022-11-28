import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";



// ConfigurationErrorDetails
/** 
 * Contains the details of an IoT SiteWise configuration error.
**/
export class ConfigurationErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: ErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
