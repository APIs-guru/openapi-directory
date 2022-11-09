import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Links extends SpeakeasyBase {
  @Metadata({ data: "json, name=invitation" })
  invitation?: string;

  @Metadata({ data: "json, name=share" })
  share?: string;
}
