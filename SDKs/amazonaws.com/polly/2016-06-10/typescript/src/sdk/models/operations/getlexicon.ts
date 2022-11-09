import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLexiconPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LexiconName" })
  lexiconName: string;
}


export class GetLexiconHeaders extends SpeakeasyBase {
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


export class GetLexiconRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLexiconPathParams;

  @Metadata()
  headers: GetLexiconHeaders;
}


export class GetLexiconResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLexiconOutput?: shared.GetLexiconOutput;

  @Metadata()
  lexiconNotFoundException?: any;

  @Metadata()
  serviceFailureException?: any;

  @Metadata()
  statusCode: number;
}
