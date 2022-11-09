import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImportAppCatalogRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleName" })
  roleName?: string;
}
