import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestCustomDataIdentifierHeaders extends SpeakeasyBase {
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


export class TestCustomDataIdentifierRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignoreWords" })
  ignoreWords?: string[];

  @Metadata({ data: "json, name=keywords" })
  keywords?: string[];

  @Metadata({ data: "json, name=maximumMatchDistance" })
  maximumMatchDistance?: number;

  @Metadata({ data: "json, name=regex" })
  regex: string;

  @Metadata({ data: "json, name=sampleText" })
  sampleText: string;
}


export class TestCustomDataIdentifierRequest extends SpeakeasyBase {
  @Metadata()
  headers: TestCustomDataIdentifierHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: TestCustomDataIdentifierRequestBody;
}


export class TestCustomDataIdentifierResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  testCustomDataIdentifierResponse?: shared.TestCustomDataIdentifierResponse;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
