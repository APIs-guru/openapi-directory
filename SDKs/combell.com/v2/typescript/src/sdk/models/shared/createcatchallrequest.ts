import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCatchAllRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;
}
