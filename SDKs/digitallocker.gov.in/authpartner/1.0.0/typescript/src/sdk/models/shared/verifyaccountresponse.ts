import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerifyAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digilockerid" })
  digilockerid: string;

  @SpeakeasyMetadata({ data: "json, name=registered" })
  registered: string;
}
