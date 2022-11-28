import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataLakeSettings } from "./datalakesettings";



export class GetDataLakeSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataLakeSettings" })
  dataLakeSettings?: DataLakeSettings;
}
