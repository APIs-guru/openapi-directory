import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProfileCreationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=pinEnabled" })
  pinEnabled?: boolean;

  @Metadata({ data: "json, name=purchaseEnabled" })
  purchaseEnabled?: boolean;

  @Metadata({ data: "json, name=segments" })
  segments?: string[];
}
