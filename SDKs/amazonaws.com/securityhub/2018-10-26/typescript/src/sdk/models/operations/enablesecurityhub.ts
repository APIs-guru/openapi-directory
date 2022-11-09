import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnableSecurityHubHeaders extends SpeakeasyBase {
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


export class EnableSecurityHubRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EnableDefaultStandards" })
  enableDefaultStandards?: boolean;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class EnableSecurityHubRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnableSecurityHubHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: EnableSecurityHubRequestBody;
}


export class EnableSecurityHubResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  enableSecurityHubResponse?: Map<string, any>;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidAccessException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  statusCode: number;
}
