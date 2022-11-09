import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ClickwrapEntityUseWithBundlesEnum {
    None = "none"
,    Available = "available"
,    Require = "require"
}

export enum ClickwrapEntityUseWithInboxesEnum {
    None = "none"
,    Available = "available"
,    Require = "require"
}

export enum ClickwrapEntityUseWithUsersEnum {
    None = "none"
,    Require = "require"
}


// ClickwrapEntity
/** 
 * Create Clickwrap
**/
export class ClickwrapEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=use_with_bundles" })
  useWithBundles?: ClickwrapEntityUseWithBundlesEnum;

  @Metadata({ data: "json, name=use_with_inboxes" })
  useWithInboxes?: ClickwrapEntityUseWithInboxesEnum;

  @Metadata({ data: "json, name=use_with_users" })
  useWithUsers?: ClickwrapEntityUseWithUsersEnum;
}
