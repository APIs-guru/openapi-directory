import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSpaceTopicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topicId" })
  topicId: string;
}


export class UpdateSpaceTopicRequestBody extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "form, name=mentionedUsers;" })
  mentionedUsers?: string[];

  @SpeakeasyMetadata({ data: "form, name=subject;" })
  subject?: string;

  @SpeakeasyMetadata({ data: "form, name=tags;" })
  tags?: string[];
}


export class UpdateSpaceTopicSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateSpaceTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSpaceTopicPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSpaceTopicRequestBody;

  @SpeakeasyMetadata()
  security: UpdateSpaceTopicSecurity;
}


export class UpdateSpaceTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spaceTopic?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
