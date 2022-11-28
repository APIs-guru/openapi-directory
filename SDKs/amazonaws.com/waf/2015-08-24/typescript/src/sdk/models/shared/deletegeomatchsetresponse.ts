import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGeoMatchSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;
}
