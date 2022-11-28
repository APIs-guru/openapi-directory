import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostAssociateDataShareConsumerActionEnum {
    AssociateDataShareConsumer = "AssociateDataShareConsumer"
}

export enum PostAssociateDataShareConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostAssociateDataShareConsumerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostAssociateDataShareConsumerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostAssociateDataShareConsumerVersionEnum;
}


export class PostAssociateDataShareConsumerHeaders extends SpeakeasyBase {
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


export class PostAssociateDataShareConsumerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAssociateDataShareConsumerQueryParams;

  @SpeakeasyMetadata()
  headers: PostAssociateDataShareConsumerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostAssociateDataShareConsumerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
