import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Entitlement } from "./entitlement";


export class EntitlementsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entitlement", elemType: shared.Entitlement })
  entitlement?: Entitlement[];
}
