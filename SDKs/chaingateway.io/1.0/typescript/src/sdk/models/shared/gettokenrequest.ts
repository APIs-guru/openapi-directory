import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contractaddress" })
  contractaddress: string;
}
