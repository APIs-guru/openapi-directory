import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEffectivePermissionsForPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetEffectivePermissionsForPathXAmzTargetEnum {
    AwsLakeFormationGetEffectivePermissionsForPath = "AWSLakeFormation.GetEffectivePermissionsForPath"
}


export class GetEffectivePermissionsForPathHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetEffectivePermissionsForPathXAmzTargetEnum;
}


export class GetEffectivePermissionsForPathRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEffectivePermissionsForPathQueryParams;

  @Metadata()
  headers: GetEffectivePermissionsForPathHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetEffectivePermissionsForPathRequest;
}


export class GetEffectivePermissionsForPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  getEffectivePermissionsForPathResponse?: shared.GetEffectivePermissionsForPathResponse;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
