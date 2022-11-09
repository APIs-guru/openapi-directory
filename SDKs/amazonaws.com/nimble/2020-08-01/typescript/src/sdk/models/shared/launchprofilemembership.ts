import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LaunchProfilePersonaEnum } from "./launchprofilepersonaenum";


export class LaunchProfileMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityStoreId" })
  identityStoreId?: string;

  @Metadata({ data: "json, name=persona" })
  persona?: LaunchProfilePersonaEnum;

  @Metadata({ data: "json, name=principalId" })
  principalId?: string;
}
