import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StudioPersonaEnum } from "./studiopersonaenum";


export class StudioMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityStoreId" })
  identityStoreId?: string;

  @Metadata({ data: "json, name=persona" })
  persona?: StudioPersonaEnum;

  @Metadata({ data: "json, name=principalId" })
  principalId?: string;
}
