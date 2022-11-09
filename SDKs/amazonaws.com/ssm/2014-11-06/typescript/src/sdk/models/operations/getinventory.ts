import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInventoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetInventoryXAmzTargetEnum {
    AmazonSsmGetInventory = "AmazonSSM.GetInventory"
}


export class GetInventoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetInventoryXAmzTargetEnum;
}


export class GetInventoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInventoryQueryParams;

  @Metadata()
  headers: GetInventoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetInventoryRequest;
}


export class GetInventoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInventoryResult?: shared.GetInventoryResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidAggregatorException?: any;

  @Metadata()
  invalidFilter?: any;

  @Metadata()
  invalidInventoryGroupException?: any;

  @Metadata()
  invalidNextToken?: any;

  @Metadata()
  invalidResultAttributeException?: any;

  @Metadata()
  invalidTypeNameException?: any;

  @Metadata()
  statusCode: number;
}
