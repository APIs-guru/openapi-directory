import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invitation" })
  invitation?: string;

  @SpeakeasyMetadata({ data: "json, name=share" })
  share?: string;
}
