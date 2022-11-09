import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateContactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ContactListName" })
  contactListName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmailAddress" })
  emailAddress: string;
}


export class UpdateContactHeaders extends SpeakeasyBase {
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


export class UpdateContactRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributesData" })
  attributesData?: string;

  @Metadata({ data: "json, name=TopicPreferences", elemType: shared.TopicPreference })
  topicPreferences?: shared.TopicPreference[];

  @Metadata({ data: "json, name=UnsubscribeAll" })
  unsubscribeAll?: boolean;
}


export class UpdateContactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateContactPathParams;

  @Metadata()
  headers: UpdateContactHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateContactRequestBody;
}


export class UpdateContactResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateContactResponse?: Map<string, any>;
}
