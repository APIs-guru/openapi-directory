import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationJurisdictionEnum } from "./organization";



// Organization1
/** 
 * An organization connected to data hub
**/
export class Organization1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countyName" })
  countyName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=jurisdiction" })
  jurisdiction: OrganizationJurisdictionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=stateCode" })
  stateCode?: string;
}
