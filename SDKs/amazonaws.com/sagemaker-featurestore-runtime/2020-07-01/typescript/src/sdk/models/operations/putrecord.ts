import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRecordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FeatureGroupName" })
  featureGroupName: string;
}


export class PutRecordHeaders extends SpeakeasyBase {
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


export class PutRecordRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Record", elemType: shared.FeatureValue })
  record: shared.FeatureValue[];
}


export class PutRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRecordPathParams;

  @SpeakeasyMetadata()
  headers: PutRecordHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutRecordRequestBody;
}


export class PutRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessForbidden?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailure?: any;

  @SpeakeasyMetadata()
  serviceUnavailable?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationError?: any;
}
