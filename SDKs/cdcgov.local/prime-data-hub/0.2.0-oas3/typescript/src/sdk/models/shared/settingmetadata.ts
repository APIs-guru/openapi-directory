import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SettingMetadata
/** 
 * The metadata associated with an setting
**/
export class SettingMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
