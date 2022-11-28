import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DescribeParameterGroupsXAmzTargetEnum {
    AmazonMemoryDbDescribeParameterGroups = "AmazonMemoryDB.DescribeParameterGroups"
}


export class DescribeParameterGroupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeParameterGroupsXAmzTargetEnum;
}


export class DescribeParameterGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DescribeParameterGroupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DescribeParameterGroupsRequest;
}


export class DescribeParameterGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeParameterGroupsResponse?: shared.DescribeParameterGroupsResponse;

  @SpeakeasyMetadata()
  invalidParameterCombinationException?: any;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  parameterGroupNotFoundFault?: any;

  @SpeakeasyMetadata()
  serviceLinkedRoleNotFoundFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
