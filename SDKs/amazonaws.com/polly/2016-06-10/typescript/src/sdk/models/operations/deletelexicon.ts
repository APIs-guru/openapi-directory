import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLexiconPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LexiconName" })
  lexiconName: string;
}


export class DeleteLexiconHeaders extends SpeakeasyBase {
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


export class DeleteLexiconRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLexiconPathParams;

  @Metadata()
  headers: DeleteLexiconHeaders;
}


export class DeleteLexiconResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteLexiconOutput?: Map<string, any>;

  @Metadata()
  lexiconNotFoundException?: any;

  @Metadata()
  serviceFailureException?: any;

  @Metadata()
  statusCode: number;
}
