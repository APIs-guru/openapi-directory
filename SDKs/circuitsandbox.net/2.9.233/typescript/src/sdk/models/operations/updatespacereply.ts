import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSpaceReplyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replyId" })
  replyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class UpdateSpaceReplyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=attachments;" })
  attachments?: string[];

  @SpeakeasyMetadata({ data: "form, name=complex;" })
  complex?: boolean;

  @SpeakeasyMetadata({ data: "form, name=content;" })
  content?: string;

  @SpeakeasyMetadata({ data: "form, name=formMetaData;" })
  formMetaData?: string;

  @SpeakeasyMetadata({ data: "form, name=mentionedUsers;" })
  mentionedUsers?: string[];
}


export class UpdateSpaceReplySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateSpaceReplyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSpaceReplyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSpaceReplyRequestBody;

  @SpeakeasyMetadata()
  security: UpdateSpaceReplySecurity;
}


export class UpdateSpaceReplyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spaceReply?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
