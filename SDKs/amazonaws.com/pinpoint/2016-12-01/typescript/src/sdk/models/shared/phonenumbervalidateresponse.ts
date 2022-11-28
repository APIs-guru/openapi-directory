import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NumberValidateResponse } from "./numbervalidateresponse";



export class PhoneNumberValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NumberValidateResponse" })
  numberValidateResponse: NumberValidateResponse;
}
