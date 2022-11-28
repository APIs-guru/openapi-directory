import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeChangeSetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=catalog" })
  catalog: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changeSetId" })
  changeSetId: string;
}


export class DescribeChangeSetHeaders extends SpeakeasyBase {
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


export class DescribeChangeSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DescribeChangeSetQueryParams;

  @SpeakeasyMetadata()
  headers: DescribeChangeSetHeaders;
}


export class DescribeChangeSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeChangeSetResponse?: shared.DescribeChangeSetResponse;

  @SpeakeasyMetadata()
  internalServiceException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
