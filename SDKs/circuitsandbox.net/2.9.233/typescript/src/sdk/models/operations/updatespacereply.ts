import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSpaceReplyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=replyId" })
  replyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class UpdateSpaceReplyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=attachments;" })
  attachments?: string[];

  @Metadata({ data: "form, name=complex;" })
  complex?: boolean;

  @Metadata({ data: "form, name=content;" })
  content?: string;

  @Metadata({ data: "form, name=formMetaData;" })
  formMetaData?: string;

  @Metadata({ data: "form, name=mentionedUsers;" })
  mentionedUsers?: string[];
}


export class UpdateSpaceReplySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateSpaceReplyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSpaceReplyPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSpaceReplyRequestBody;

  @Metadata()
  security: UpdateSpaceReplySecurity;
}


export class UpdateSpaceReplyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  spaceReply?: any;

  @Metadata()
  statusCode: number;
}
