import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteMembersHeaders extends SpeakeasyBase {
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


export class DeleteMembersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountIds" })
  accountIds: string[];
}


export class DeleteMembersRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteMembersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteMembersRequestBody;
}


export class DeleteMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteMembersResponse?: shared.DeleteMembersResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidAccessException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
