import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRecordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FeatureGroupName" })
  featureGroupName: string;
}


export class PutRecordHeaders extends SpeakeasyBase {
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


export class PutRecordRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Record", elemType: shared.FeatureValue })
  record: shared.FeatureValue[];
}


export class PutRecordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRecordPathParams;

  @Metadata()
  headers: PutRecordHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutRecordRequestBody;
}


export class PutRecordResponse extends SpeakeasyBase {
  @Metadata()
  accessForbidden?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailure?: any;

  @Metadata()
  serviceUnavailable?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationError?: any;
}
