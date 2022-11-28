import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchAssociateProjectAssetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class BatchAssociateProjectAssetsHeaders extends SpeakeasyBase {
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


export class BatchAssociateProjectAssetsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetIds" })
  assetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;
}


export class BatchAssociateProjectAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BatchAssociateProjectAssetsPathParams;

  @SpeakeasyMetadata()
  headers: BatchAssociateProjectAssetsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchAssociateProjectAssetsRequestBody;
}


export class BatchAssociateProjectAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchAssociateProjectAssetsResponse?: shared.BatchAssociateProjectAssetsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
