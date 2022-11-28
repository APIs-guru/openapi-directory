import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UndeprecateDomainXAmzTargetEnum {
    SimpleWorkflowServiceUndeprecateDomain = "SimpleWorkflowService.UndeprecateDomain"
}


export class UndeprecateDomainHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UndeprecateDomainXAmzTargetEnum;
}


export class UndeprecateDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UndeprecateDomainHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UndeprecateDomainInput;
}


export class UndeprecateDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  domainAlreadyExistsFault?: any;

  @SpeakeasyMetadata()
  operationNotPermittedFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unknownResourceFault?: any;
}
