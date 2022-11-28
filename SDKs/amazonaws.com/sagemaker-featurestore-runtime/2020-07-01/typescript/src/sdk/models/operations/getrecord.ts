import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FeatureGroupName" })
  featureGroupName: string;
}


export class GetRecordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FeatureName" })
  featureName?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RecordIdentifierValueAsString" })
  recordIdentifierValueAsString: string;
}


export class GetRecordHeaders extends SpeakeasyBase {
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


export class GetRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRecordPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRecordQueryParams;

  @SpeakeasyMetadata()
  headers: GetRecordHeaders;
}


export class GetRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessForbidden?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRecordResponse?: shared.GetRecordResponse;

  @SpeakeasyMetadata()
  internalFailure?: any;

  @SpeakeasyMetadata()
  resourceNotFound?: any;

  @SpeakeasyMetadata()
  serviceUnavailable?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationError?: any;
}
