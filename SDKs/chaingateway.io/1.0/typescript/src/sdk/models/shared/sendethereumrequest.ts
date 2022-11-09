import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendEthereumRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=to" })
  to: string;
}
