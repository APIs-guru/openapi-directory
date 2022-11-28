import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEnableLoggingActionEnum {
    EnableLogging = "EnableLogging"
}

export enum GetEnableLoggingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetEnableLoggingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableLoggingActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=S3KeyPrefix" })
  s3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableLoggingVersionEnum;
}


export class GetEnableLoggingHeaders extends SpeakeasyBase {
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


export class GetEnableLoggingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEnableLoggingQueryParams;

  @SpeakeasyMetadata()
  headers: GetEnableLoggingHeaders;
}


export class GetEnableLoggingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
