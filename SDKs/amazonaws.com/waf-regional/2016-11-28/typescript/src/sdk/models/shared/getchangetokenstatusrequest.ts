import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChangeTokenStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;
}
