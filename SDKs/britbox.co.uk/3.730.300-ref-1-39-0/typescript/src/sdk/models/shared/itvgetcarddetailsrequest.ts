import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvGetCardDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
