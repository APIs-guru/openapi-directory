import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAssociateDataShareConsumerActionEnum {
    AssociateDataShareConsumer = "AssociateDataShareConsumer"
}

export enum GetAssociateDataShareConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetAssociateDataShareConsumerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateDataShareConsumerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AssociateEntireAccount" })
  associateEntireAccount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConsumerArn" })
  consumerArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DataShareArn" })
  dataShareArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateDataShareConsumerVersionEnum;
}


export class GetAssociateDataShareConsumerHeaders extends SpeakeasyBase {
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


export class GetAssociateDataShareConsumerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssociateDataShareConsumerQueryParams;

  @SpeakeasyMetadata()
  headers: GetAssociateDataShareConsumerHeaders;
}


export class GetAssociateDataShareConsumerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
