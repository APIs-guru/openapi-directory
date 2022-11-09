import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateRoutingControlStatesXAmzTargetEnum {
    ToggleCustomerApiUpdateRoutingControlStates = "ToggleCustomerAPI.UpdateRoutingControlStates"
}


export class UpdateRoutingControlStatesHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateRoutingControlStatesXAmzTargetEnum;
}


export class UpdateRoutingControlStatesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateRoutingControlStatesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateRoutingControlStatesRequest;
}


export class UpdateRoutingControlStatesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  endpointTemporarilyUnavailableException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateRoutingControlStatesResponse?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
