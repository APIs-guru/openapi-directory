import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetStartActivityStreamActionEnum {
    StartActivityStream = "StartActivityStream"
}

export enum GetStartActivityStreamModeEnum {
    Sync = "sync",
    Async = "async"
}

export enum GetStartActivityStreamVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetStartActivityStreamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStartActivityStreamActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineNativeAuditFieldsIncluded" })
  engineNativeAuditFieldsIncluded?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" })
  kmsKeyId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Mode" })
  mode: GetStartActivityStreamModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ResourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStartActivityStreamVersionEnum;
}


export class GetStartActivityStreamHeaders extends SpeakeasyBase {
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


export class GetStartActivityStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStartActivityStreamQueryParams;

  @SpeakeasyMetadata()
  headers: GetStartActivityStreamHeaders;
}


export class GetStartActivityStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
