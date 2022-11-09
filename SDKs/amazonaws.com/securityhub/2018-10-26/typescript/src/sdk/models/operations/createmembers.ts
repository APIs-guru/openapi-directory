import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateMembersHeaders extends SpeakeasyBase {
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


export class CreateMembersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountDetails", elemType: shared.AccountDetails })
  accountDetails: shared.AccountDetails[];
}


export class CreateMembersRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateMembersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateMembersRequestBody;
}


export class CreateMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createMembersResponse?: shared.CreateMembersResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidAccessException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  statusCode: number;
}
