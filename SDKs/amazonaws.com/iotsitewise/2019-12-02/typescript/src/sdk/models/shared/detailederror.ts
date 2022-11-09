import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DetailedErrorCodeEnum } from "./detailederrorcodeenum";


// DetailedError
/** 
 * Contains detailed error information. 
**/
export class DetailedError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: DetailedErrorCodeEnum;

  @Metadata({ data: "json, name=message" })
  message: string;
}
