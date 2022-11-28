import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInventoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum GetInventoryXAmzTargetEnum {
    AmazonSsmGetInventory = "AmazonSSM.GetInventory"
}


export class GetInventoryHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetInventoryXAmzTargetEnum;
}


export class GetInventoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetInventoryQueryParams;

  @SpeakeasyMetadata()
  headers: GetInventoryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetInventoryRequest;
}


export class GetInventoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getInventoryResult?: shared.GetInventoryResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidAggregatorException?: any;

  @SpeakeasyMetadata()
  invalidFilter?: any;

  @SpeakeasyMetadata()
  invalidInventoryGroupException?: any;

  @SpeakeasyMetadata()
  invalidNextToken?: any;

  @SpeakeasyMetadata()
  invalidResultAttributeException?: any;

  @SpeakeasyMetadata()
  invalidTypeNameException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
