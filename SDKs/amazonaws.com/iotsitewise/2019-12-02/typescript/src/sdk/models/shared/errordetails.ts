import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorCodeEnum } from "./errorcodeenum";
import { DetailedError } from "./detailederror";


// ErrorDetails
/** 
 * Contains the details of an IoT SiteWise error.
**/
export class ErrorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: ErrorCodeEnum;

  @Metadata({ data: "json, name=details", elemType: shared.DetailedError })
  details?: DetailedError[];

  @Metadata({ data: "json, name=message" })
  message: string;
}
