import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ContactListName" })
  contactListName: string;
}


export class CreateContactHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class CreateContactRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributesData" })
  attributesData?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress: string;

  @SpeakeasyMetadata({ data: "json, name=TopicPreferences", elemType: shared.TopicPreference })
  topicPreferences?: shared.TopicPreference[];

  @SpeakeasyMetadata({ data: "json, name=UnsubscribeAll" })
  unsubscribeAll?: boolean;
}


export class CreateContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateContactPathParams;

  @SpeakeasyMetadata()
  headers: CreateContactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateContactRequestBody;
}


export class CreateContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alreadyExistsException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createContactResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
