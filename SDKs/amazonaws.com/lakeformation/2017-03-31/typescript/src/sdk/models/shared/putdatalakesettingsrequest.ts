import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataLakeSettings } from "./datalakesettings";



export class PutDataLakeSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DataLakeSettings" })
  dataLakeSettings: DataLakeSettings;
}
