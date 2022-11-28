import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrgUnit } from "./orgunit";



export class OrgUnits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationUnits", elemType: OrgUnit })
  organizationUnits?: OrgUnit[];
}
