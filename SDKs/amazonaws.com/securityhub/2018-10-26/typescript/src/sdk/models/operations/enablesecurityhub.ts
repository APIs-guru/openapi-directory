import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnableSecurityHubHeaders extends SpeakeasyBase {
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


export class EnableSecurityHubRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EnableDefaultStandards" })
  enableDefaultStandards?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class EnableSecurityHubRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EnableSecurityHubHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: EnableSecurityHubRequestBody;
}


export class EnableSecurityHubResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  enableSecurityHubResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidAccessException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
