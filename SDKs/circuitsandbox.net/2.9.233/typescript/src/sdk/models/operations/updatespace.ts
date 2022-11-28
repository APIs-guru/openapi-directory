import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSpacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum UpdateSpaceRequestBodyAccessModeTypeEnum {
    InternalOnly = "INTERNAL_ONLY",
    InternalExternal = "INTERNAL_EXTERNAL",
    NoChange = "NO_CHANGE"
}

export enum UpdateSpaceRequestBodyRoleEnum {
    Moderator = "MODERATOR",
    Author = "AUTHOR",
    Participant = "PARTICIPANT",
    Reader = "READER",
    NoChange = "NO_CHANGE"
}

export enum UpdateSpaceRequestBodyStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}

export enum UpdateSpaceRequestBodyTypeEnum {
    Open = "OPEN",
    Closed = "CLOSED",
    Secret = "SECRET",
    NoChange = "NO_CHANGE"
}


export class UpdateSpaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=accessModeType;" })
  accessModeType?: UpdateSpaceRequestBodyAccessModeTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=largePictureBase64;" })
  largePictureBase64?: string;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=ownerId;" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "form, name=role;" })
  role?: UpdateSpaceRequestBodyRoleEnum;

  @SpeakeasyMetadata({ data: "form, name=smallPictureBase64;" })
  smallPictureBase64?: string;

  @SpeakeasyMetadata({ data: "form, name=status;" })
  status?: UpdateSpaceRequestBodyStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=tags;" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "form, name=type;" })
  type?: UpdateSpaceRequestBodyTypeEnum;
}


export class UpdateSpaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateSpaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSpacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSpaceRequestBody;

  @SpeakeasyMetadata()
  security: UpdateSpaceSecurity;
}


export class UpdateSpaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantSpaceWrapper?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
