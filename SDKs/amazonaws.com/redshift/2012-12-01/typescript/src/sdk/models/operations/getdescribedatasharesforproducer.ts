import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeDataSharesForProducerActionEnum {
    DescribeDataSharesForProducer = "DescribeDataSharesForProducer"
}

export enum GetDescribeDataSharesForProducerStatusEnum {
    Active = "ACTIVE"
,    Authorized = "AUTHORIZED"
,    PendingAuthorization = "PENDING_AUTHORIZATION"
,    Deauthorized = "DEAUTHORIZED"
,    Rejected = "REJECTED"
}

export enum GetDescribeDataSharesForProducerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeDataSharesForProducerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeDataSharesForProducerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ProducerArn" })
  producerArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: GetDescribeDataSharesForProducerStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeDataSharesForProducerVersionEnum;
}


export class GetDescribeDataSharesForProducerHeaders extends SpeakeasyBase {
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


export class GetDescribeDataSharesForProducerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeDataSharesForProducerQueryParams;

  @Metadata()
  headers: GetDescribeDataSharesForProducerHeaders;
}


export class GetDescribeDataSharesForProducerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
