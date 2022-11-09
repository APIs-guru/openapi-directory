import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceGroup } from "./devicegroup";
import { DeviceTierSet } from "./devicetierset";


// DeviceTierConfig
/** 
 * LINT.IfChange Configuration describing device targeting criteria for the content of an app.
**/
export class DeviceTierConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceGroups", elemType: shared.DeviceGroup })
  deviceGroups?: DeviceGroup[];

  @Metadata({ data: "json, name=deviceTierConfigId" })
  deviceTierConfigId?: string;

  @Metadata({ data: "json, name=deviceTierSet" })
  deviceTierSet?: DeviceTierSet;
}
