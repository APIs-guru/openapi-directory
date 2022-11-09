import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VerifyAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=digilockerid" })
  digilockerid: string;

  @Metadata({ data: "json, name=registered" })
  registered: string;
}
