import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
import { DetailedError } from "./detailederror";



// ErrorDetails
/** 
 * Contains the details of an IoT SiteWise error.
**/
export class ErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: ErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=details", elemType: DetailedError })
  details?: DetailedError[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
