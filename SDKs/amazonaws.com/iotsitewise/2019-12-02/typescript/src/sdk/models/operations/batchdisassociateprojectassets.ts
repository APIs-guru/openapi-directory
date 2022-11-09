import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchDisassociateProjectAssetsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class BatchDisassociateProjectAssetsHeaders extends SpeakeasyBase {
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


export class BatchDisassociateProjectAssetsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetIds" })
  assetIds: string[];

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;
}


export class BatchDisassociateProjectAssetsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BatchDisassociateProjectAssetsPathParams;

  @Metadata()
  headers: BatchDisassociateProjectAssetsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchDisassociateProjectAssetsRequestBody;
}


export class BatchDisassociateProjectAssetsResponse extends SpeakeasyBase {
  @Metadata()
  batchDisassociateProjectAssetsResponse?: shared.BatchDisassociateProjectAssetsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
