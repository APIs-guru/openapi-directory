import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvProfileToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
