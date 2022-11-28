import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PostClickwrapsRequestBodyUseWithBundlesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}

export enum PostClickwrapsRequestBodyUseWithInboxesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}

export enum PostClickwrapsRequestBodyUseWithUsersEnum {
    None = "none",
    Require = "require"
}


export class PostClickwrapsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=use_with_bundles" })
  useWithBundles?: PostClickwrapsRequestBodyUseWithBundlesEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=use_with_inboxes" })
  useWithInboxes?: PostClickwrapsRequestBodyUseWithInboxesEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=use_with_users" })
  useWithUsers?: PostClickwrapsRequestBodyUseWithUsersEnum;
}


export class PostClickwrapsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostClickwrapsRequestBody;
}


export class PostClickwrapsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clickwrapEntity?: shared.ClickwrapEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
