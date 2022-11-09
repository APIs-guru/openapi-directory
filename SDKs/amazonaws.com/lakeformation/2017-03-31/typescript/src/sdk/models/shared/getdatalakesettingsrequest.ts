import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDataLakeSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;
}
