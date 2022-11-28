import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvAssignBtTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
