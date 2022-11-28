import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisassociateDataShareConsumerActionEnum {
    DisassociateDataShareConsumer = "DisassociateDataShareConsumer"
}

export enum GetDisassociateDataShareConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDisassociateDataShareConsumerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisassociateDataShareConsumerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConsumerArn" })
  consumerArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DataShareArn" })
  dataShareArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DisassociateEntireAccount" })
  disassociateEntireAccount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisassociateDataShareConsumerVersionEnum;
}


export class GetDisassociateDataShareConsumerHeaders extends SpeakeasyBase {
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


export class GetDisassociateDataShareConsumerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisassociateDataShareConsumerQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisassociateDataShareConsumerHeaders;
}


export class GetDisassociateDataShareConsumerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
