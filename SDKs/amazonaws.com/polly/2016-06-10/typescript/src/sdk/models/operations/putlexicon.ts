import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutLexiconPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LexiconName" })
  lexiconName: string;
}


export class PutLexiconHeaders extends SpeakeasyBase {
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


export class PutLexiconRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Content" })
  content: string;
}


export class PutLexiconRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutLexiconPathParams;

  @Metadata()
  headers: PutLexiconHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutLexiconRequestBody;
}


export class PutLexiconResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidLexiconException?: any;

  @Metadata()
  lexiconSizeExceededException?: any;

  @Metadata()
  maxLexemeLengthExceededException?: any;

  @Metadata()
  maxLexiconsNumberExceededException?: any;

  @Metadata()
  putLexiconOutput?: Map<string, any>;

  @Metadata()
  serviceFailureException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedPlsAlphabetException?: any;

  @Metadata()
  unsupportedPlsLanguageException?: any;
}
