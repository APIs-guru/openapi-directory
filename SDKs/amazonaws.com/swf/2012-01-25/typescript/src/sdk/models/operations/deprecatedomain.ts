import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeprecateDomainXAmzTargetEnum {
    SimpleWorkflowServiceDeprecateDomain = "SimpleWorkflowService.DeprecateDomain"
}


export class DeprecateDomainHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeprecateDomainXAmzTargetEnum;
}


export class DeprecateDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeprecateDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeprecateDomainInput;
}


export class DeprecateDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domainDeprecatedFault?: any;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceFault?: any;
}
