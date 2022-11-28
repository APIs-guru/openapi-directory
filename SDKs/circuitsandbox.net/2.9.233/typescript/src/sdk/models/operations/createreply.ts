import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateReplyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class CreateReplyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=attachments;" })
  attachments?: string[];

  @SpeakeasyMetadata({ data: "form, name=complex;" })
  complex?: boolean;

  @SpeakeasyMetadata({ data: "form, name=content;" })
  content?: string;

  @SpeakeasyMetadata({ data: "form, name=formMetaData;" })
  formMetaData?: string;

  @SpeakeasyMetadata({ data: "form, name=mentionedUser;" })
  mentionedUser?: string;
}


export class CreateReplySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateReplyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateReplyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateReplyRequestBody;

  @SpeakeasyMetadata()
  security: CreateReplySecurity;
}


export class CreateReplyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spaceReply?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
