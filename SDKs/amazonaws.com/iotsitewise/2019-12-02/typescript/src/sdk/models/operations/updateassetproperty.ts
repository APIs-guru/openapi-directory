import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAssetPropertyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assetId" })
  assetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=propertyId" })
  propertyId: string;
}


export class UpdateAssetPropertyHeaders extends SpeakeasyBase {
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

export enum UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum {
    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


export class UpdateAssetPropertyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=propertyAlias" })
  propertyAlias?: string;

  @Metadata({ data: "json, name=propertyNotificationState" })
  propertyNotificationState?: UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum;
}


export class UpdateAssetPropertyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateAssetPropertyPathParams;

  @Metadata()
  headers: UpdateAssetPropertyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateAssetPropertyRequestBody;
}


export class UpdateAssetPropertyResponse extends SpeakeasyBase {
  @Metadata()
  conflictingOperationException?: any;

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
