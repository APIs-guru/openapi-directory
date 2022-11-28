import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Entitlement } from "./entitlement";



export class EntitlementsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entitlement", elemType: Entitlement })
  entitlement?: Entitlement[];
}
