import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";


// ConfigurationErrorDetails
/** 
 * Contains the details of an IoT SiteWise configuration error.
**/
export class ConfigurationErrorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: ErrorCodeEnum;

  @Metadata({ data: "json, name=message" })
  message: string;
}
