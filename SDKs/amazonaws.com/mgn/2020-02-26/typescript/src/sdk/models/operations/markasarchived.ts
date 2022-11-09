import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MarkAsArchivedHeaders extends SpeakeasyBase {
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


export class MarkAsArchivedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceServerID" })
  sourceServerId: string;
}


export class MarkAsArchivedRequest extends SpeakeasyBase {
  @Metadata()
  headers: MarkAsArchivedHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: MarkAsArchivedRequestBody;
}


export class MarkAsArchivedResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  sourceServer?: shared.SourceServer;

  @Metadata()
  statusCode: number;

  @Metadata()
  uninitializedAccountException?: any;
}
