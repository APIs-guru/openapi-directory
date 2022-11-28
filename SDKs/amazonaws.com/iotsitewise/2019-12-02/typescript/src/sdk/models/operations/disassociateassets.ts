import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateAssetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assetId" })
  assetId: string;
}


export class DisassociateAssetsHeaders extends SpeakeasyBase {
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


export class DisassociateAssetsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childAssetId" })
  childAssetId: string;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=hierarchyId" })
  hierarchyId: string;
}


export class DisassociateAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisassociateAssetsPathParams;

  @SpeakeasyMetadata()
  headers: DisassociateAssetsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DisassociateAssetsRequestBody;
}


export class DisassociateAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictingOperationException?: any;

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
