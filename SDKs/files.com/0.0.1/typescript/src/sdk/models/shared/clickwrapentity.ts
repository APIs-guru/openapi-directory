import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ClickwrapEntityUseWithBundlesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}

export enum ClickwrapEntityUseWithInboxesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}

export enum ClickwrapEntityUseWithUsersEnum {
    None = "none",
    Require = "require"
}


// ClickwrapEntity
/** 
 * Create Clickwrap
**/
export class ClickwrapEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=use_with_bundles" })
  useWithBundles?: ClickwrapEntityUseWithBundlesEnum;

  @SpeakeasyMetadata({ data: "json, name=use_with_inboxes" })
  useWithInboxes?: ClickwrapEntityUseWithInboxesEnum;

  @SpeakeasyMetadata({ data: "json, name=use_with_users" })
  useWithUsers?: ClickwrapEntityUseWithUsersEnum;
}
