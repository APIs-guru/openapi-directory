import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FeatureGroupName" })
  featureGroupName: string;
}


export class GetRecordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FeatureName" })
  featureName?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=RecordIdentifierValueAsString" })
  recordIdentifierValueAsString: string;
}


export class GetRecordHeaders extends SpeakeasyBase {
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


export class GetRecordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRecordPathParams;

  @Metadata()
  queryParams: GetRecordQueryParams;

  @Metadata()
  headers: GetRecordHeaders;
}


export class GetRecordResponse extends SpeakeasyBase {
  @Metadata()
  accessForbidden?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getRecordResponse?: shared.GetRecordResponse;

  @Metadata()
  internalFailure?: any;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  serviceUnavailable?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationError?: any;
}
