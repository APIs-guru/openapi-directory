import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAssetPropertyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assetId" })
  assetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=propertyId" })
  propertyId: string;
}


export class UpdateAssetPropertyHeaders extends SpeakeasyBase {
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

export enum UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


export class UpdateAssetPropertyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyAlias" })
  propertyAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyNotificationState" })
  propertyNotificationState?: UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum;
}


export class UpdateAssetPropertyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateAssetPropertyPathParams;

  @SpeakeasyMetadata()
  headers: UpdateAssetPropertyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateAssetPropertyRequestBody;
}


export class UpdateAssetPropertyResponse extends SpeakeasyBase {
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
