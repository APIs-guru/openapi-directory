import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEnableLoggingActionEnum {
    EnableLogging = "EnableLogging"
}

export enum GetEnableLoggingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetEnableLoggingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableLoggingActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=BucketName" })
  bucketName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=S3KeyPrefix" })
  s3KeyPrefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableLoggingVersionEnum;
}


export class GetEnableLoggingHeaders extends SpeakeasyBase {
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


export class GetEnableLoggingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEnableLoggingQueryParams;

  @Metadata()
  headers: GetEnableLoggingHeaders;
}


export class GetEnableLoggingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
