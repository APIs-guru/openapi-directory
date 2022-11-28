import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssetIdFromOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
