import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contractaddress" })
  contractaddress: string;
}
