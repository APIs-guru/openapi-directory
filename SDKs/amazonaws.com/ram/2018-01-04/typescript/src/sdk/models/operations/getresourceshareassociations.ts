import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourceShareAssociationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class GetResourceShareAssociationsHeaders extends SpeakeasyBase {
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

export enum GetResourceShareAssociationsRequestBodyAssociationStatusEnum {
    Associating = "ASSOCIATING"
,    Associated = "ASSOCIATED"
,    Failed = "FAILED"
,    Disassociating = "DISASSOCIATING"
,    Disassociated = "DISASSOCIATED"
}

export enum GetResourceShareAssociationsRequestBodyAssociationTypeEnum {
    Principal = "PRINCIPAL"
,    Resource = "RESOURCE"
}


export class GetResourceShareAssociationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=associationStatus" })
  associationStatus?: GetResourceShareAssociationsRequestBodyAssociationStatusEnum;

  @Metadata({ data: "json, name=associationType" })
  associationType: GetResourceShareAssociationsRequestBodyAssociationTypeEnum;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=principal" })
  principal?: string;

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=resourceShareArns" })
  resourceShareArns?: string[];
}


export class GetResourceShareAssociationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourceShareAssociationsQueryParams;

  @Metadata()
  headers: GetResourceShareAssociationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetResourceShareAssociationsRequestBody;
}


export class GetResourceShareAssociationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourceShareAssociationsResponse?: shared.GetResourceShareAssociationsResponse;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  malformedArnException?: any;

  @Metadata()
  operationNotPermittedException?: any;

  @Metadata()
  serverInternalException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceException?: any;
}
