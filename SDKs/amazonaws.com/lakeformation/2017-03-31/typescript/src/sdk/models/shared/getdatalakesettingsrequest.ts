import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDataLakeSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;
}
