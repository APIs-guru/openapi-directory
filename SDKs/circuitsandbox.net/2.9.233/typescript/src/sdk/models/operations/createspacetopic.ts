import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSpaceTopicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class CreateSpaceTopicRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=attachments;" })
  attachments?: string[];

  @Metadata({ data: "form, name=complex;" })
  complex?: boolean;

  @Metadata({ data: "form, name=content;" })
  content?: string;

  @Metadata({ data: "form, name=contentTags;" })
  contentTags?: string[];

  @Metadata({ data: "form, name=formMetaData;" })
  formMetaData?: string;

  @Metadata({ data: "form, name=mentionedUser;" })
  mentionedUser?: string;

  @Metadata({ data: "form, name=subject;" })
  subject: string;

  @Metadata({ data: "form, name=tags;" })
  tags?: string[];
}


export class CreateSpaceTopicSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateSpaceTopicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSpaceTopicPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateSpaceTopicRequestBody;

  @Metadata()
  security: CreateSpaceTopicSecurity;
}


export class CreateSpaceTopicResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  spaceTopic?: any;

  @Metadata()
  statusCode: number;
}
