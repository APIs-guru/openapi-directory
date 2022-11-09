import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvRokuTransactionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
