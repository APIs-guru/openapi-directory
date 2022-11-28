import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfilePersonaEnum } from "./launchprofilepersonaenum";



export class LaunchProfileMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityStoreId" })
  identityStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=persona" })
  persona?: LaunchProfilePersonaEnum;

  @SpeakeasyMetadata({ data: "json, name=principalId" })
  principalId?: string;
}
