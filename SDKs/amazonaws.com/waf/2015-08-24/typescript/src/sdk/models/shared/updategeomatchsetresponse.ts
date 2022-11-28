import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateGeoMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
