import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateSpaceRequestBodyAccessModeTypeEnum {
    InternalOnly = "INTERNAL_ONLY"
,    InternalExternal = "INTERNAL_EXTERNAL"
}

export enum CreateSpaceRequestBodyRoleEnum {
    Moderator = "MODERATOR"
,    Author = "AUTHOR"
,    Participant = "PARTICIPANT"
,    Reader = "READER"
}

export enum CreateSpaceRequestBodyStatusEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}

export enum CreateSpaceRequestBodyTypeEnum {
    Open = "OPEN"
,    Closed = "CLOSED"
,    Secret = "SECRET"
}


export class CreateSpaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=accessModeType;" })
  accessModeType: CreateSpaceRequestBodyAccessModeTypeEnum;

  @Metadata({ data: "form, name=description;" })
  description?: string;

  @Metadata({ data: "form, name=largePictureBase64;" })
  largePictureBase64?: string;

  @Metadata({ data: "form, name=name;" })
  name: string;

  @Metadata({ data: "form, name=role;" })
  role: CreateSpaceRequestBodyRoleEnum;

  @Metadata({ data: "form, name=smallPictureBase64;" })
  smallPictureBase64?: string;

  @Metadata({ data: "form, name=status;" })
  status: CreateSpaceRequestBodyStatusEnum;

  @Metadata({ data: "form, name=tags;" })
  tags?: string[];

  @Metadata({ data: "form, name=type;" })
  type: CreateSpaceRequestBodyTypeEnum;
}


export class CreateSpaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateSpaceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateSpaceRequestBody;

  @Metadata()
  security: CreateSpaceSecurity;
}


export class CreateSpaceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  participantSpaceWrapper?: any;

  @Metadata()
  statusCode: number;
}
