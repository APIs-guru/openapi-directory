import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourceShareAssociationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class GetResourceShareAssociationsHeaders extends SpeakeasyBase {
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

export enum GetResourceShareAssociationsRequestBodyAssociationStatusEnum {
    Associating = "ASSOCIATING",
    Associated = "ASSOCIATED",
    Failed = "FAILED",
    Disassociating = "DISASSOCIATING",
    Disassociated = "DISASSOCIATED"
}

export enum GetResourceShareAssociationsRequestBodyAssociationTypeEnum {
    Principal = "PRINCIPAL",
    Resource = "RESOURCE"
}


export class GetResourceShareAssociationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associationStatus" })
  associationStatus?: GetResourceShareAssociationsRequestBodyAssociationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=associationType" })
  associationType: GetResourceShareAssociationsRequestBodyAssociationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=principal" })
  principal?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShareArns" })
  resourceShareArns?: string[];
}


export class GetResourceShareAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResourceShareAssociationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetResourceShareAssociationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetResourceShareAssociationsRequestBody;
}


export class GetResourceShareAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getResourceShareAssociationsResponse?: shared.GetResourceShareAssociationsResponse;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  malformedArnException?: any;

  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  @SpeakeasyMetadata()
  serverInternalException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unknownResourceException?: any;
}
