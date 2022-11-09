import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Alias extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations" })
  destinations?: string[];

  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;
}
