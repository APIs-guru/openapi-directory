import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetTerminologyXAmzTargetEnum {
    AwsShineFrontendService20170701GetTerminology = "AWSShineFrontendService_20170701.GetTerminology"
}


export class GetTerminologyHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetTerminologyXAmzTargetEnum;
}


export class GetTerminologyRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetTerminologyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetTerminologyRequest;
}


export class GetTerminologyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTerminologyResponse?: shared.GetTerminologyResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
