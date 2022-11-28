import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvChangeMarketingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailOptIn" })
  emailOptIn: boolean;

  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;
}
