import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAssociateDataShareConsumerActionEnum {
    AssociateDataShareConsumer = "AssociateDataShareConsumer"
}

export enum GetAssociateDataShareConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetAssociateDataShareConsumerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateDataShareConsumerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AssociateEntireAccount" })
  associateEntireAccount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConsumerArn" })
  consumerArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DataShareArn" })
  dataShareArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateDataShareConsumerVersionEnum;
}


export class GetAssociateDataShareConsumerHeaders extends SpeakeasyBase {
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


export class GetAssociateDataShareConsumerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssociateDataShareConsumerQueryParams;

  @Metadata()
  headers: GetAssociateDataShareConsumerHeaders;
}


export class GetAssociateDataShareConsumerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
