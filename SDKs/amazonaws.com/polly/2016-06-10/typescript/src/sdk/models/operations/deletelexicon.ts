import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLexiconPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LexiconName" })
  lexiconName: string;
}


export class DeleteLexiconHeaders extends SpeakeasyBase {
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


export class DeleteLexiconRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLexiconPathParams;

  @SpeakeasyMetadata()
  headers: DeleteLexiconHeaders;
}


export class DeleteLexiconResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteLexiconOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  lexiconNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceFailureException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
