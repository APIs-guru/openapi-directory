import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataLakeSettings } from "./datalakesettings";


export class GetDataLakeSettingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataLakeSettings" })
  dataLakeSettings?: DataLakeSettings;
}
