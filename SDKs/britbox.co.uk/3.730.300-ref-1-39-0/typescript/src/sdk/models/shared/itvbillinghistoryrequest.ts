import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvBillingHistoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
