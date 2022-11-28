import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetailedErrorCodeEnum } from "./detailederrorcodeenum";



// DetailedError
/** 
 * Contains detailed error information. 
**/
export class DetailedError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: DetailedErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
