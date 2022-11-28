import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestCustomDataIdentifierHeaders extends SpeakeasyBase {
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


export class TestCustomDataIdentifierRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignoreWords" })
  ignoreWords?: string[];

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=maximumMatchDistance" })
  maximumMatchDistance?: number;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex: string;

  @SpeakeasyMetadata({ data: "json, name=sampleText" })
  sampleText: string;
}


export class TestCustomDataIdentifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: TestCustomDataIdentifierHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: TestCustomDataIdentifierRequestBody;
}


export class TestCustomDataIdentifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  testCustomDataIdentifierResponse?: shared.TestCustomDataIdentifierResponse;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
