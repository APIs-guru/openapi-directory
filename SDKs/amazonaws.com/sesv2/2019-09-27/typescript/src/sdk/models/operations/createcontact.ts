import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateContactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ContactListName" })
  contactListName: string;
}


export class CreateContactHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class CreateContactRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributesData" })
  attributesData?: string;

  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress: string;

  @Metadata({ data: "json, name=TopicPreferences", elemType: shared.TopicPreference })
  topicPreferences?: shared.TopicPreference[];

  @Metadata({ data: "json, name=UnsubscribeAll" })
  unsubscribeAll?: boolean;
}


export class CreateContactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateContactPathParams;

  @Metadata()
  headers: CreateContactHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateContactRequestBody;
}


export class CreateContactResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createContactResponse?: Map<string, any>;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
