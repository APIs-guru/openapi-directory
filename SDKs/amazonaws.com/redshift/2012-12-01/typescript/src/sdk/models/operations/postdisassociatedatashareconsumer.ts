import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDisassociateDataShareConsumerActionEnum {
    DisassociateDataShareConsumer = "DisassociateDataShareConsumer"
}

export enum PostDisassociateDataShareConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostDisassociateDataShareConsumerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDisassociateDataShareConsumerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDisassociateDataShareConsumerVersionEnum;
}


export class PostDisassociateDataShareConsumerHeaders extends SpeakeasyBase {
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


export class PostDisassociateDataShareConsumerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDisassociateDataShareConsumerQueryParams;

  @SpeakeasyMetadata()
  headers: PostDisassociateDataShareConsumerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDisassociateDataShareConsumerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
