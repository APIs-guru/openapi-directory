import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDomainXAmzTargetEnum {
    SimpleWorkflowServiceDescribeDomain = "SimpleWorkflowService.DescribeDomain"
}


export class DescribeDomainHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDomainXAmzTargetEnum;
}


export class DescribeDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDomainInput;
}


export class DescribeDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domainDetail?: shared.DomainDetail;

  @Metadata()
  operationNotPermittedFault?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceFault?: any;
}
