import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioPersonaEnum } from "./studiopersonaenum";



export class StudioMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityStoreId" })
  identityStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=persona" })
  persona?: StudioPersonaEnum;

  @SpeakeasyMetadata({ data: "json, name=principalId" })
  principalId?: string;
}
