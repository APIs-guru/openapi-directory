import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetStartActivityStreamActionEnum {
    StartActivityStream = "StartActivityStream"
}

export enum GetStartActivityStreamModeEnum {
    Sync = "sync"
,    Async = "async"
}

export enum GetStartActivityStreamVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetStartActivityStreamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetStartActivityStreamActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplyImmediately" })
  applyImmediately?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EngineNativeAuditFieldsIncluded" })
  engineNativeAuditFieldsIncluded?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" })
  kmsKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Mode" })
  mode: GetStartActivityStreamModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ResourceArn" })
  resourceArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetStartActivityStreamVersionEnum;
}


export class GetStartActivityStreamHeaders extends SpeakeasyBase {
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


export class GetStartActivityStreamRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStartActivityStreamQueryParams;

  @Metadata()
  headers: GetStartActivityStreamHeaders;
}


export class GetStartActivityStreamResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
