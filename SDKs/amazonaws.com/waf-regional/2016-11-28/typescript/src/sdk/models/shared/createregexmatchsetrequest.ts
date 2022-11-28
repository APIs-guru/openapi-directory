import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateRegexMatchSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
