import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Collection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_family" })
  assetFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=license_model" })
  licenseModel?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=product_types" })
  productTypes?: string[];
}
