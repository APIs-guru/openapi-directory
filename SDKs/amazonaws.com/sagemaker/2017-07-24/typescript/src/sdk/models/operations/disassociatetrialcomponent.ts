import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateTrialComponentXAmzTargetEnum {
    SageMakerDisassociateTrialComponent = "SageMaker.DisassociateTrialComponent"
}


export class DisassociateTrialComponentHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateTrialComponentXAmzTargetEnum;
}


export class DisassociateTrialComponentRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateTrialComponentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateTrialComponentRequest;
}


export class DisassociateTrialComponentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociateTrialComponentResponse?: shared.DisassociateTrialComponentResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
