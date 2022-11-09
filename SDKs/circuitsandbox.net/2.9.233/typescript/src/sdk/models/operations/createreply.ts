import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateReplyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class CreateReplyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=attachments;" })
  attachments?: string[];

  @Metadata({ data: "form, name=complex;" })
  complex?: boolean;

  @Metadata({ data: "form, name=content;" })
  content?: string;

  @Metadata({ data: "form, name=formMetaData;" })
  formMetaData?: string;

  @Metadata({ data: "form, name=mentionedUser;" })
  mentionedUser?: string;
}


export class CreateReplySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateReplyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateReplyPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateReplyRequestBody;

  @Metadata()
  security: CreateReplySecurity;
}


export class CreateReplyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  spaceReply?: any;

  @Metadata()
  statusCode: number;
}
