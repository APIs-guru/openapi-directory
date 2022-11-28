import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchDisassociateProjectAssetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class BatchDisassociateProjectAssetsHeaders extends SpeakeasyBase {
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


export class BatchDisassociateProjectAssetsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetIds" })
  assetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;
}


export class BatchDisassociateProjectAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatchDisassociateProjectAssetsPathParams;

  @SpeakeasyMetadata()
  headers: BatchDisassociateProjectAssetsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchDisassociateProjectAssetsRequestBody;
}


export class BatchDisassociateProjectAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchDisassociateProjectAssetsResponse?: shared.BatchDisassociateProjectAssetsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
