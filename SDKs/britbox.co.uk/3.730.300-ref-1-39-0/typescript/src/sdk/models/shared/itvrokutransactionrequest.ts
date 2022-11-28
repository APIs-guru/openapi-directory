import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvRokuTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
