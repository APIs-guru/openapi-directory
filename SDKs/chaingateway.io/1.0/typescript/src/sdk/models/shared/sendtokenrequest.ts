import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=contractaddress" })
  contractaddress: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}
