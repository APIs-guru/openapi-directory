import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSpacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum UpdateSpaceRequestBodyAccessModeTypeEnum {
    InternalOnly = "INTERNAL_ONLY"
,    InternalExternal = "INTERNAL_EXTERNAL"
,    NoChange = "NO_CHANGE"
}

export enum UpdateSpaceRequestBodyRoleEnum {
    Moderator = "MODERATOR"
,    Author = "AUTHOR"
,    Participant = "PARTICIPANT"
,    Reader = "READER"
,    NoChange = "NO_CHANGE"
}

export enum UpdateSpaceRequestBodyStatusEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}

export enum UpdateSpaceRequestBodyTypeEnum {
    Open = "OPEN"
,    Closed = "CLOSED"
,    Secret = "SECRET"
,    NoChange = "NO_CHANGE"
}


export class UpdateSpaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=accessModeType;" })
  accessModeType?: UpdateSpaceRequestBodyAccessModeTypeEnum;

  @Metadata({ data: "form, name=description;" })
  description?: string;

  @Metadata({ data: "form, name=largePictureBase64;" })
  largePictureBase64?: string;

  @Metadata({ data: "form, name=name;" })
  name?: string;

  @Metadata({ data: "form, name=ownerId;" })
  ownerId?: string;

  @Metadata({ data: "form, name=role;" })
  role?: UpdateSpaceRequestBodyRoleEnum;

  @Metadata({ data: "form, name=smallPictureBase64;" })
  smallPictureBase64?: string;

  @Metadata({ data: "form, name=status;" })
  status?: UpdateSpaceRequestBodyStatusEnum;

  @Metadata({ data: "form, name=tags;" })
  tags?: string[];

  @Metadata({ data: "form, name=type;" })
  type?: UpdateSpaceRequestBodyTypeEnum;
}


export class UpdateSpaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateSpaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSpacePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSpaceRequestBody;

  @Metadata()
  security: UpdateSpaceSecurity;
}


export class UpdateSpaceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  participantSpaceWrapper?: any;

  @Metadata()
  statusCode: number;
}
