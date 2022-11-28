import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EditorialSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
