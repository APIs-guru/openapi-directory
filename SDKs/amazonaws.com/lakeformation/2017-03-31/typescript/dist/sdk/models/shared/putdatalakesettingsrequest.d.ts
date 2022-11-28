import { SpeakeasyBase } from "../../../internal/utils";
import { DataLakeSettings } from "./datalakesettings";
export declare class PutDataLakeSettingsRequest extends SpeakeasyBase {
    catalogId?: string;
    dataLakeSettings: DataLakeSettings;
}
