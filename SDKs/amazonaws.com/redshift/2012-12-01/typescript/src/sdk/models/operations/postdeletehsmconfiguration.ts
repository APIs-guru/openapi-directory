import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteHsmConfigurationActionEnum {
    DeleteHsmConfiguration = "DeleteHsmConfiguration"
}

export enum PostDeleteHsmConfigurationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostDeleteHsmConfigurationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteHsmConfigurationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteHsmConfigurationVersionEnum;
}


export class PostDeleteHsmConfigurationHeaders extends SpeakeasyBase {
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


export class PostDeleteHsmConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteHsmConfigurationQueryParams;

  @Metadata()
  headers: PostDeleteHsmConfigurationHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteHsmConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
