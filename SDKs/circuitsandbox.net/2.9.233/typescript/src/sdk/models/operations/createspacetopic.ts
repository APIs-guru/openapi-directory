import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSpaceTopicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class CreateSpaceTopicRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=attachments;" })
  attachments?: string[];

  @SpeakeasyMetadata({ data: "form, name=complex;" })
  complex?: boolean;

  @SpeakeasyMetadata({ data: "form, name=content;" })
  content?: string;

  @SpeakeasyMetadata({ data: "form, name=contentTags;" })
  contentTags?: string[];

  @SpeakeasyMetadata({ data: "form, name=formMetaData;" })
  formMetaData?: string;

  @SpeakeasyMetadata({ data: "form, name=mentionedUser;" })
  mentionedUser?: string;

  @SpeakeasyMetadata({ data: "form, name=subject;" })
  subject: string;

  @SpeakeasyMetadata({ data: "form, name=tags;" })
  tags?: string[];
}


export class CreateSpaceTopicSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateSpaceTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSpaceTopicPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: CreateSpaceTopicRequestBody;

  @SpeakeasyMetadata()
  security: CreateSpaceTopicSecurity;
}


export class CreateSpaceTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spaceTopic?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
