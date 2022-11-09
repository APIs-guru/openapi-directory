import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateGeoMatchSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
