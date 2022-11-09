import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteObjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Path" })
  path: string;
}


export class DeleteObjectHeaders extends SpeakeasyBase {
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


export class DeleteObjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteObjectPathParams;

  @Metadata()
  headers: DeleteObjectHeaders;
}


export class DeleteObjectResponse extends SpeakeasyBase {
  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteObjectResponse?: Map<string, any>;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  objectNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
