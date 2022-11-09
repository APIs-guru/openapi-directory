import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Collection extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_family" })
  assetFamily?: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=license_model" })
  licenseModel?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=product_types" })
  productTypes?: string[];
}
