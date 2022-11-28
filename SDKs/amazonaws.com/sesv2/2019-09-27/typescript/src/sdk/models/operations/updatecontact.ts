import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ContactListName" })
  contactListName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailAddress" })
  emailAddress: string;
}


export class UpdateContactHeaders extends SpeakeasyBase {
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


export class UpdateContactRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributesData" })
  attributesData?: string;

  @SpeakeasyMetadata({ data: "json, name=TopicPreferences", elemType: shared.TopicPreference })
  topicPreferences?: shared.TopicPreference[];

  @SpeakeasyMetadata({ data: "json, name=UnsubscribeAll" })
  unsubscribeAll?: boolean;
}


export class UpdateContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateContactPathParams;

  @SpeakeasyMetadata()
  headers: UpdateContactHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateContactRequestBody;
}


export class UpdateContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateContactResponse?: Map<string, any>;
}
