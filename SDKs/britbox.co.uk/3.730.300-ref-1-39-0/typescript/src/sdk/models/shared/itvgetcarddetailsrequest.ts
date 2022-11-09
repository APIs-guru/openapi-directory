import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvGetCardDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
