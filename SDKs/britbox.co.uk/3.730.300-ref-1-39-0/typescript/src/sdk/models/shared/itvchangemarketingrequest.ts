import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvChangeMarketingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailOptIn" })
  emailOptIn: boolean;

  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
