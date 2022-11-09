import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InAppProductListing extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
