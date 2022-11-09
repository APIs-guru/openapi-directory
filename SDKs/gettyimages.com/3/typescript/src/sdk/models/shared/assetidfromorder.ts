import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssetIdFromOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}
