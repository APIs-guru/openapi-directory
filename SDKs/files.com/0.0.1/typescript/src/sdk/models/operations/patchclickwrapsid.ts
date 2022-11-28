import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchClickwrapsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PatchClickwrapsIdRequestBodyUseWithBundlesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}

export enum PatchClickwrapsIdRequestBodyUseWithInboxesEnum {
    None = "none",
    Available = "available",
    Require = "require"
}

export enum PatchClickwrapsIdRequestBodyUseWithUsersEnum {
    None = "none",
    Require = "require"
}


export class PatchClickwrapsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=use_with_bundles" })
  useWithBundles?: PatchClickwrapsIdRequestBodyUseWithBundlesEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=use_with_inboxes" })
  useWithInboxes?: PatchClickwrapsIdRequestBodyUseWithInboxesEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=use_with_users" })
  useWithUsers?: PatchClickwrapsIdRequestBodyUseWithUsersEnum;
}


export class PatchClickwrapsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchClickwrapsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchClickwrapsIdRequestBody;
}


export class PatchClickwrapsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clickwrapEntity?: shared.ClickwrapEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
