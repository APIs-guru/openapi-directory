import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportAppCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleName" })
  roleName?: string;
}
