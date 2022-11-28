import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutLexiconPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LexiconName" })
  lexiconName: string;
}


export class PutLexiconHeaders extends SpeakeasyBase {
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


export class PutLexiconRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Content" })
  content: string;
}


export class PutLexiconRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutLexiconPathParams;

  @SpeakeasyMetadata()
  headers: PutLexiconHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutLexiconRequestBody;
}


export class PutLexiconResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidLexiconException?: any;

  @SpeakeasyMetadata()
  lexiconSizeExceededException?: any;

  @SpeakeasyMetadata()
  maxLexemeLengthExceededException?: any;

  @SpeakeasyMetadata()
  maxLexiconsNumberExceededException?: any;

  @SpeakeasyMetadata()
  putLexiconOutput?: Map<string, any>;

  @SpeakeasyMetadata()
  serviceFailureException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedPlsAlphabetException?: any;

  @SpeakeasyMetadata()
  unsupportedPlsLanguageException?: any;
}
