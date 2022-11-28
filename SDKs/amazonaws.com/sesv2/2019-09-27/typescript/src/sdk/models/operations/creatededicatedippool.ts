import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDedicatedIpPoolHeaders extends SpeakeasyBase {
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


export class CreateDedicatedIpPoolRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PoolName" })
  poolName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateDedicatedIpPoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDedicatedIpPoolHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDedicatedIpPoolRequestBody;
}


export class CreateDedicatedIpPoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alreadyExistsException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDedicatedIpPoolResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
