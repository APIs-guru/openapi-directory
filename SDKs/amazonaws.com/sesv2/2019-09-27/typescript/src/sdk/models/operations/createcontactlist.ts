import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateContactListHeaders extends SpeakeasyBase {
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


export class CreateContactListRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactListName" })
  contactListName: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=Topics", elemType: shared.Topic })
  topics?: shared.Topic[];
}


export class CreateContactListRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateContactListHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateContactListRequestBody;
}


export class CreateContactListResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createContactListResponse?: Map<string, any>;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
