import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchClickwrapsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PatchClickwrapsIdRequestBodyUseWithBundlesEnum {
    None = "none"
,    Available = "available"
,    Require = "require"
}

export enum PatchClickwrapsIdRequestBodyUseWithInboxesEnum {
    None = "none"
,    Available = "available"
,    Require = "require"
}

export enum PatchClickwrapsIdRequestBodyUseWithUsersEnum {
    None = "none"
,    Require = "require"
}


export class PatchClickwrapsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=body" })
  body?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=use_with_bundles" })
  useWithBundles?: PatchClickwrapsIdRequestBodyUseWithBundlesEnum;

  @Metadata({ data: "multipart_form, name=use_with_inboxes" })
  useWithInboxes?: PatchClickwrapsIdRequestBodyUseWithInboxesEnum;

  @Metadata({ data: "multipart_form, name=use_with_users" })
  useWithUsers?: PatchClickwrapsIdRequestBodyUseWithUsersEnum;
}


export class PatchClickwrapsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchClickwrapsIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchClickwrapsIdRequestBody;
}


export class PatchClickwrapsIdResponse extends SpeakeasyBase {
  @Metadata()
  clickwrapEntity?: shared.ClickwrapEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
