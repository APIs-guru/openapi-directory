import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateSpaceRequestBodyAccessModeTypeEnum {
    InternalOnly = "INTERNAL_ONLY",
    InternalExternal = "INTERNAL_EXTERNAL"
}

export enum CreateSpaceRequestBodyRoleEnum {
    Moderator = "MODERATOR",
    Author = "AUTHOR",
    Participant = "PARTICIPANT",
    Reader = "READER"
}

export enum CreateSpaceRequestBodyStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}

export enum CreateSpaceRequestBodyTypeEnum {
    Open = "OPEN",
    Closed = "CLOSED",
    Secret = "SECRET"
}


export class CreateSpaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=accessModeType;" })
  accessModeType: CreateSpaceRequestBodyAccessModeTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=largePictureBase64;" })
  largePictureBase64?: string;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name: string;

  @SpeakeasyMetadata({ data: "form, name=role;" })
  role: CreateSpaceRequestBodyRoleEnum;

  @SpeakeasyMetadata({ data: "form, name=smallPictureBase64;" })
  smallPictureBase64?: string;

  @SpeakeasyMetadata({ data: "form, name=status;" })
  status: CreateSpaceRequestBodyStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=tags;" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "form, name=type;" })
  type: CreateSpaceRequestBodyTypeEnum;
}


export class CreateSpaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateSpaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateSpaceRequestBody;

  @SpeakeasyMetadata()
  security: CreateSpaceSecurity;
}


export class CreateSpaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantSpaceWrapper?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
