import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvBillingHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
