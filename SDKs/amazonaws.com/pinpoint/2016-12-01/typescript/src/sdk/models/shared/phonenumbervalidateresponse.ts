import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NumberValidateResponse } from "./numbervalidateresponse";


export class PhoneNumberValidateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NumberValidateResponse" })
  numberValidateResponse: NumberValidateResponse;
}
