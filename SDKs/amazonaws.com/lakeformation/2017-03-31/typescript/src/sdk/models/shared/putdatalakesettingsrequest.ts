import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataLakeSettings } from "./datalakesettings";


export class PutDataLakeSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DataLakeSettings" })
  dataLakeSettings: DataLakeSettings;
}
