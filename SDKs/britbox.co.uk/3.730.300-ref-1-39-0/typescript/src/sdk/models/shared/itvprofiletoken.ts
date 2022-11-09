import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvProfileToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;
}
