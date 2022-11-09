import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ImportTerminologyXAmzTargetEnum {
    AwsShineFrontendService20170701ImportTerminology = "AWSShineFrontendService_20170701.ImportTerminology"
}


export class ImportTerminologyHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ImportTerminologyXAmzTargetEnum;
}


export class ImportTerminologyRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportTerminologyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImportTerminologyRequest;
}


export class ImportTerminologyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  importTerminologyResponse?: shared.ImportTerminologyResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
