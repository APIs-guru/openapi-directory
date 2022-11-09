import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInventorySchemaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetInventorySchemaXAmzTargetEnum {
    AmazonSsmGetInventorySchema = "AmazonSSM.GetInventorySchema"
}


export class GetInventorySchemaHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetInventorySchemaXAmzTargetEnum;
}


export class GetInventorySchemaRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInventorySchemaQueryParams;

  @Metadata()
  headers: GetInventorySchemaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetInventorySchemaRequest;
}


export class GetInventorySchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInventorySchemaResult?: shared.GetInventorySchemaResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  invalidTypeNameException?: any;

  @Metadata()
  statusCode: number;
}
