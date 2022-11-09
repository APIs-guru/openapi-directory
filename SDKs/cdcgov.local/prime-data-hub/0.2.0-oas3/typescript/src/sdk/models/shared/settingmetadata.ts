import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SettingMetadata
/** 
 * The metadata associated with an setting
**/
export class SettingMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
