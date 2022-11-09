import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostClickwrapsRequestBodyUseWithBundlesEnum {
    None = "none"
,    Available = "available"
,    Require = "require"
}

export enum PostClickwrapsRequestBodyUseWithInboxesEnum {
    None = "none"
,    Available = "available"
,    Require = "require"
}

export enum PostClickwrapsRequestBodyUseWithUsersEnum {
    None = "none"
,    Require = "require"
}


export class PostClickwrapsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=body" })
  body?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=use_with_bundles" })
  useWithBundles?: PostClickwrapsRequestBodyUseWithBundlesEnum;

  @Metadata({ data: "multipart_form, name=use_with_inboxes" })
  useWithInboxes?: PostClickwrapsRequestBodyUseWithInboxesEnum;

  @Metadata({ data: "multipart_form, name=use_with_users" })
  useWithUsers?: PostClickwrapsRequestBodyUseWithUsersEnum;
}


export class PostClickwrapsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostClickwrapsRequestBody;
}


export class PostClickwrapsResponse extends SpeakeasyBase {
  @Metadata()
  clickwrapEntity?: shared.ClickwrapEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
