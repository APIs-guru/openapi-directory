import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCatchAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email_address" })
  emailAddress?: string;
}
