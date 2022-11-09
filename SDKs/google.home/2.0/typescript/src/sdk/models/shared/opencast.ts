import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Opencast extends SpeakeasyBase {
  @Metadata({ data: "json, name=pin_code" })
  pinCode: string;
}
