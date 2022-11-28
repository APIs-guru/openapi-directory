import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRecordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FeatureGroupName" })
  featureGroupName: string;
}


export class DeleteRecordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EventTime" })
  eventTime: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RecordIdentifierValueAsString" })
  recordIdentifierValueAsString: string;
}


export class DeleteRecordHeaders extends SpeakeasyBase {
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


export class DeleteRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRecordPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteRecordQueryParams;

  @SpeakeasyMetadata()
  headers: DeleteRecordHeaders;
}


export class DeleteRecordResponse extends SpeakeasyBase {
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
